import classNames from 'classnames/bind';
import style from './home.module.scss';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

const cx = classNames.bind(style);

export interface ServiceProcessProps {}

export default function ServiceProcess({}: ServiceProcessProps) {
    return (
        <section className={'my-10'}>
            <div className={'grid grid-cols-12 gap-4'}>
                <div className={'col-span-12 md:col-span-4'}>
                    <div className={cx('decor-border-top')} />
                    <h1 className={'text-3xl uppercase mb-5'}>Qui trình thực hiện dịch vụ</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    <div className={cx('decor-border-top')} />
                    <div className={'flex items-end gap-2 mb-5'}>
                        <p className={'text-5xl font-bold'}>01.</p>
                        <h2 className={'text-xl font-bold'}>Qui trình số 1</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    <div className={cx('decor-border-top')} />
                    <div className={'flex items-end gap-2 mb-5'}>
                        <p className={'text-5xl font-bold'}>02.</p>
                        <h2 className={'text-xl font-bold'}>Qui trình số 2</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={'col-span-12 md:col-span-4'}/>
                <div className={'col-span-12 md:col-span-4'}>
                    <div className={'flex items-end gap-2 mb-5'}>
                        <p className={'text-5xl font-bold'}>03.</p>
                        <h2 className={'text-xl font-bold'}>Qui trình số 3</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={'col-span-12 md:col-span-4'}>
                    <div className={'flex items-end gap-2 mb-5'}>
                        <p className={'text-5xl font-bold'}>04.</p>
                        <h2 className={'text-xl font-bold'}>Qui trình số 4</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className={'flex justify-center mt-5'}>
                <Link href={'/'} className={`inline-flex items-center gap-3 ${cx('link')}`}>
                    <p className={'text-xl uppercase font-bold'}>Liên hệ ngay</p>
                    <EastIcon />
                </Link>
            </div>
        </section>
    );
}