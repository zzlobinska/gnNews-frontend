import Logo from '../Logo';
import Timer from './components/Timer';

import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.boxLeft}>
        <Logo smaller />
      </div>
      <p className={style.text}>liczba wszystkich artykułów: <span className={style.textDarker}>2</span></p>
      <div className={style.boxRight}>
        <Timer />
      </div>
    </footer>
  );
};

export default Footer;
