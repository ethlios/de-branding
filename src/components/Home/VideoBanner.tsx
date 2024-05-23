import classNames from 'classnames/bind';
import style from './home.module.scss';

const cx = classNames.bind(style);

export interface VideoBannerProps {}

export default function VideoBanner({}: VideoBannerProps) {
    return (
        <section>
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                height: '400px',
            }}>
            </div>
        </section>
    );
}