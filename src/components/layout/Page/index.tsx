import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import style from './Page.module.scss';

const Page = () => {
  return (
    <div>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
