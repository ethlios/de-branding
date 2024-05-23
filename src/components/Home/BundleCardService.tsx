import classNames from 'classnames/bind';
import style from './home.module.scss';

const cx = classNames.bind(style);

export interface BundleCardServiceProps {}

export default function BundleCardService({}: BundleCardServiceProps) {
    return (
        <div className={'grid grid-cols-2 gap-6'}>
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className={'col-span-2 md:col-span-1'}>
                    <div style={{
                        width: '100%',
                        height: '500px',
                        border: '2px solid #000',
                    }}/>
                    <h2 className={'text-2xl mt-6 mb-3'}>Dịch vụ thiết kế website</h2>
                    <p style={{color:'var(--primary2)', fontWeight: 500}}>(lorem1, lorem2, lorem3)</p>
                </div>
            ))}
        </div>
    );
}