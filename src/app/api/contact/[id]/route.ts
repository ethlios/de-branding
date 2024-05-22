import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { NextResponse } from 'next/server';
import prisma from '~/libs/orthers/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const res = await request.json();
        const { name, email, phone, message } = res;
        // Kiểm tra các trường bắt buộc
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email và message là các trường bắt buộc.' },
                { status: 400 },
            );
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Email không hợp lệ.' }, { status: 400 });
        }

        // Cập nhật bản ghi trong bảng contact
        const updatedContact = await prisma.contact.update({
            where: { id: Number(params.id) },
            data: {
                name,
                email,
                phone,
                message,
            },
        });

        return NextResponse.json(
            {
                message: 'Cập nhật thông tin liên hệ thành công!',
                data: updatedContact,
            },
            { status: 200 },
        );
    } catch (error: any) {
        if (error instanceof PrismaClientKnownRequestError) {
            // Lỗi từ Prisma
            return NextResponse.json({ error: 'Lỗi từ cơ sở dữ liệu: ' + error.message }, { status: 400 });
        } else if (error instanceof PrismaClientValidationError) {
            return NextResponse.json({ error: 'Dữ liệu không hợp lệ: ' + error.message }, { status: 400 });
        } else {
            console.error('Lỗi không mong muốn:', error);
            return NextResponse.json(
                { error: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu' },
                { status: 500 },
            );
        }
    }
}
export async function DELETE(request: Request, { params }: { params: { id: string} }) {
    const convertId = parseInt(params.id);
    const res = await prisma.contact.delete({
        where: { id: convertId },
    });
    return NextResponse.json({
        message: "Xóa thành công",
        data:res
    });
}