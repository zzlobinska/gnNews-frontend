import { Outlet } from 'react-router-dom';

import { Footer } from 'src/components';
import { Header } from 'src/components';

import style from './Page.module.scss';

const Page = () => {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
