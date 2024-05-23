import classNames from 'classnames/bind';
import style from './home.module.scss';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

const cx = classNames.bind(style);

export interface OurBlogsProps {}

export default function OurBlogs({}: OurBlogsProps) {
    return (
        <section className={'my-10'}>
            <div className={'flex justify-between items-center'}>
                <div>
                    <h1 className={'text-3xl mb-6 uppercase leading-relaxed'}>Các bài viết của<br/>Chúng tôi</h1>
                    <div className={cx('title-underlined')} />
                </div>
                <Link href={'/'} className={`inline-flex items-center gap-3 ${cx('link')}`}>
                    <p className={'text-xl uppercase font-bold'}>Xem thêm</p>
                    <EastIcon />
                </Link>
            </div>
            <div className={'my-5'}>
                <div className={'grid grid-cols-12 gap-4'}>
                    <div className={'col-span-12 md:col-span-6'}>
                        <div className={'my-4'}>
                            <div style={{
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                height: '300px',
                            }} />
                            <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className={'my-4'}>
                            <div className={'grid grid-cols-2 gap-4'}>
                                <div className={'col-span-1'}>
                                    <div style={{
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '200px',
                                    }} />
                                    <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit</p>
                                </div>
                                <div className={'col-span-1'}>
                                    <div style={{
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '200px',
                                    }} />
                                    <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-12 md:col-span-6'}>
                        <div className={'my-4'}>
                            <div className={'grid grid-cols-2 gap-4'}>
                                <div className={'col-span-1'}>
                                    <div style={{
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '200px',
                                    }} />
                                    <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit</p>
                                </div>
                                <div className={'col-span-1'}>
                                    <div style={{
                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                        height: '200px',
                                    }} />
                                    <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit</p>
                                </div>
                            </div>
                        </div>
                        <div className={'my-4'}>
                            <div style={{
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                height: '300px',
                            }} />
                            <p className={'text-xl mt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}