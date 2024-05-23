import classNames from 'classnames/bind';
import style from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import logo from '../../../public/images/logo.png';
import { headerMenu } from '~/constants/header';

const cx = classNames.bind(style);

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
    return (
        <header className={'wrapper'}>
            <div className={'flex justify-between py-6'}>
                <Link href={'/'}>
                    <Image alt="Logo công ty" src={logo.src} width={176} height={100} priority />
                </Link>
                <div className={'flex gap-4'}>
                    <div className={'flex items-center gap-4'}>
                        {headerMenu.map((item) => (
                            <Link key={item.id} href={item.pathname}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <IconButton>
                        <ClearAllIcon />
                    </IconButton>
                </div>
            </div>
        </header>
    );
}