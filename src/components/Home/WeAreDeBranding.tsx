import classNames from 'classnames/bind';
import style from './home.module.scss';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';
import BundleCardService from '~/components/Home/BundleCardService';

const cx = classNames.bind(style);

export interface WeAreDeBrandingProps {}

export default function WeAreDeBranding({}: WeAreDeBrandingProps) {
    return (
        <section className={'my-10 *:my-5'}>
            <div className={'grid grid-cols-2 gap-2'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <h1 className={'text-3xl mb-6 uppercase leading-relaxed'}>Chúng tôi là <br /> De Branding</h1>
                    <div className={cx('title-underlined')} />
                </div>
                <div className={'col-span-2 md:col-span-1 font-bold'}>
                    <p className={'mb-6'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Link href={'/'} className={`flex items-center gap-3 ${cx('link')}`}>
                        <p className={'text-xl uppercase'}>Tất cả dịch vụ của chúng tôi</p>
                        <EastIcon />
                    </Link>
                </div>
            </div>
            <BundleCardService />
        </section>
);
}