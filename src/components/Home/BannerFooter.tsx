import classNames from 'classnames/bind';
import style from './home.module.scss';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';

const cx = classNames.bind(style);

export interface BannerFooterProps {}

export default function BannerFooter({}: BannerFooterProps) {
    return (
        <section className={'border-t-2'}>
            <div className={'wrapper my-10'}>
                <div className={'grid grid-cols-2'}>
                    <div className={'col-span-2 md:col-span-1'}>
                        <p className={'text-5xl font-bold mb-5'}>Hiện thực hóa ý tưởng của bạn</p>
                        <IconButton style={{
                            border:'2px solid',
                            borderColor:'var(--primary2)',
                            width: '60px',
                            height: '60px',
                        }}>
                            <EastIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </section>
    );
}