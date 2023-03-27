import { Link } from 'react-router-dom';

import style from './NotFound.module.scss';

type NotFoundPropsType = {
  title: string;
  link?: string;
  linkName?: string | null;
};

const NotFound = ({ title, link, linkName }: NotFoundPropsType) => {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <Link className={style.link} to='/' title={link}>
        {linkName}
      </Link>
    </div>
  );
};

export default NotFound;
