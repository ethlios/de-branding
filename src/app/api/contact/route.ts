import {
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/orthers/prisma';

export async function POST(request: NextRequest) {
    try {
        // Lấy dữ liệu từ request
        const body = await request.json();

        // Kiểm tra các trường bắt buộc
        if (!body.email || !body.message || !body.name) {
            return NextResponse.json(
                { error: 'Email, message và name là các trường bắt buộc.' },
                { status: 400 },
            );
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json({ error: 'Email không hợp lệ.' }, { status: 400 });
        }

        // Tạo bản ghi mới trong bảng contact
        const newNotify = await prisma.contact.create({
            data: {
                email: body.email,
                message: body.message,
                name: body.name,
                phone: body.phone,
                submission_date: new Date().toISOString(), // Lấy ngày giờ hiện tại
            },
        });

        return NextResponse.json(
            {
                message: 'Đã gửi thông tin liên hệ!',
                data: newNotify,
            },
            {
                status: 200,
            },
        );
    } catch (error: any) {
        // Xử lý lỗi cụ thể từ Prisma
        if (error instanceof PrismaClientKnownRequestError) {
            // Lỗi do Prisma biết, chẳng hạn như lỗi unique constraint
            return NextResponse.json({ error: 'Lỗi từ cơ sở dữ liệu: ' + error.message }, { status: 400 });
        } else if (error instanceof PrismaClientInitializationError) {
            // Lỗi khởi tạo Prisma Client
            return NextResponse.json(
                { error: 'Lỗi khởi tạo cơ sở dữ liệu: ' + error.message },
                { status: 500 },
            );
        } else if (error instanceof PrismaClientValidationError) {
            // Lỗi xác thực từ Prisma Client
            return NextResponse.json({ error: 'Lỗi xác thực dữ liệu: ' + error.message }, { status: 400 });
        } else {
            // Lỗi không mong muốn khác
            console.error('Lỗi không mong muốn:', error);
            return NextResponse.json(
                { error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu' },
                { status: 500 },
            );
        }
    }
}