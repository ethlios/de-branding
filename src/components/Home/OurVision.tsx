import classNames from 'classnames/bind';
import style from './home.module.scss';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

const cx = classNames.bind(style);

export interface OurVisionProps {}

export default function OurVision({}: OurVisionProps) {
    return (
        <section className={'my-10'}>
            <div className={'w-full'}>
                <h1 className={'text-3xl mb-6 uppercase leading-relaxed'}>Sứ mệnh</h1>
                <div className={cx('title-underlined')} />
            </div>
            <div className={'grid grid-cols-12 gap-4 my-5'}>
                <div className={'col-span-12 md:col-span-8'}>
                    <p className={'font-bold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    <div style={{
                         backgroundColor: 'rgba(0,0,0,0.05)',
                        height: '200px',
                    }}/>
                </div>
            </div>
            <Link href={'/'} className={`inline-flex items-center gap-3 ${cx('link')}`}>
                <p className={'text-xl uppercase font-bold'}>Giới thiệu</p>
                <EastIcon />
            </Link>
        </section>
    );
}