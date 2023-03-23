import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

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
