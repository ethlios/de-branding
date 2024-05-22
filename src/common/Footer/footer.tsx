import classNames from 'classnames/bind';
import style from './footer.module.scss';

const cx = classNames.bind(style);

export interface FooterProps {}

export default function Footer({}: FooterProps) {
    return (
        <footer className={'wrapper'}>
            <div className={'grid grid-cols-12 gap-2'}>
                <div className={'col-span-12 md:col-span-5'}>
                    <h2>Đăng ký để nhận tin tức</h2>

                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    <h2>Dịch vụ</h2>

                </div>
                <div className={'col-span-12 md:col-span-3'}>
                    <h2>Khác</h2>

                </div>
            </div>
        </footer>
    );
}