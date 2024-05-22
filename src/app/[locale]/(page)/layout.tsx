import Header from '~/common/Header/header';
import Footer from '~/common/Footer/footer';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}