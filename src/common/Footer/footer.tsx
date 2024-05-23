import classNames from 'classnames/bind';
import style from './footer.module.scss';
import Link from 'next/link';
import {Input} from "@nextui-org/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const cx = classNames.bind(style);

export interface FooterProps {}

export default function Footer({}: FooterProps) {
    return (
        <footer>
            <div className={'wrapper border-t-2'}>
                <div className={'flex justify-between flex-wrap gap-4 py-6'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-xl'}>Đăng ký để nhận tin tức</h2>
                            <form className={`mt-4 ${cx('input-wrapper')}`}>
                                <input type="email" placeholder="Địa chỉ email" required={true} />
                                <button className={'uppercase'} type={'submit'}>Đăng ký</button>
                            </form>
                        </div>
                        <div className={'flex flex-col'}>
                            <h2 className={'text-xl'}>Liên hệ</h2>
                            <div className={'flex flex-col gap-2 mt-4'}>
                                <span><b>Địa chỉ:</b> Lầu 8, 123 Lý Chính Thắng, P.Võ Thị Sáu, Q.3</span>
                                <span><b>Điện thoại:</b> 0868 36 36 00</span>
                                <span><b>Email:</b> sales@debranding.vn</span>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                        <h2 className={'text-xl'}>Dịch vụ</h2>
                        <div className={'flex flex-col gap-2 mt-4'}>
                            <Link href={'/'}><h3>Thiết kế website</h3></Link>
                            <Link href={'/'}><h3>Thiết kế bộ nhận diện thương hiệu</h3></Link>
                            <Link href={'/'}><h3>Dịch vụ in ấn</h3></Link>
                            <Link href={'/'}><h3>Dịch vụ tổ chức sự kiện</h3></Link>
                            <Link href={'/'}><h3>SEO</h3></Link>
                            <Link href={'/'}><h3>Quảng cáo</h3></Link>
                        </div>

                    </div>
                    <div className={'flex flex-col'}>
                        <h2 className={'text-xl'}>Khác</h2>
                        <div className={'flex flex-col gap-2 mt-4'}>
                            <Link href={'/'}><h3>Liên hệ</h3></Link>
                            <Link href={'/'}><h3>Feedback</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'wrapper border-t-2'}>
                <div className={'flex flex-wrap justify-between items-center py-3'}>
                    <p>Copyright © 2024 De Branding. All Right Reserved </p>
                    <div className={'flex gap-2'}>
                        <Link
                            href={'/'}
                            className="opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin"
                        >
                            <LinkedInIcon />
                        </Link>
                        <Link
                            href={'/'}
                            className="opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </Link>
                        <Link
                            href={'/'}
                            className="opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <TwitterIcon />
                        </Link>
                        <Link
                            href={'/'}
                            className="opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </Link>
                        <Link
                            href={'/'}
                            className="opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <YouTubeIcon />
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
);
}