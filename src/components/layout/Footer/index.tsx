import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

import Logo from '../Logo';
import Timer from './components/Timer';

import style from './Footer.module.scss';

const Footer = () => {
  const articlesCounter = useSelector(
    (state: RootState) => state.articlesList.count
  );

  return (
    <footer className={style.footer}>
      <div className={style.boxLeft}>
        <Logo smaller />
      </div>
      <p className={style.text}>
        liczba wszystkich artykułów:
        <span className={style.textDarker}> {articlesCounter}</span>
      </p>
      <div className={style.boxRight}>
        <Timer />
      </div>
    </footer>
  );
};

export default Footer;
