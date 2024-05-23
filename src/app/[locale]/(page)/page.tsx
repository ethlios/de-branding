import classNames from 'classnames/bind';
import style from '~/components/Home/home.module.scss';
import VideoBanner from '~/components/Home/VideoBanner';
import WeAreDeBranding from '~/components/Home/WeAreDeBranding';
import OurVision from '~/components/Home/OurVision';
import ServiceProcess from '~/components/Home/ServiceProcess';
import OurBlogs from '~/components/Home/OurBlogs';
import BannerFooter from '~/components/Home/BannerFooter';

const cx = classNames.bind(style);

export default function Home() {
  return (
    <main>
        <VideoBanner />
        <article className={'wrapper'}>
            <WeAreDeBranding />
            <OurVision />
            <ServiceProcess />
            <OurBlogs />
        </article>
        <BannerFooter />
    </main>
  );
}
