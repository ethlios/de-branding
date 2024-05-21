import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const inter = Manrope({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
    return (
        <html lang={locale}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}