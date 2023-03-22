import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as AppLogo } from 'src/assets/logo.svg';

import style from './Logo.module.scss';

type LogoPropsType = {
  smaller?: boolean;
};



const Logo = ({ smaller }: LogoPropsType) => {
  return (
    <Link className={style.link} to='/'>
      <AppLogo className={classNames({ [style.smaller]: smaller })} />
    </Link>
  );
};

export default Logo;
