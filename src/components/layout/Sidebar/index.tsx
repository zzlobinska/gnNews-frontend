import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as CloseBtn } from 'src/assets/icons/x-lg.svg';

import style from './Sidebar.module.scss';

type SidebarPropsType = {
  setIsSidebarActive: Dispatch<SetStateAction<boolean>>;
  isSidebarActive: boolean;
};

const Sidebar = ({ setIsSidebarActive, isSidebarActive }: SidebarPropsType) => {
  const { t } = useTranslation();
  const closeSidebar = () => setIsSidebarActive(false);

  const countries = [
    { name: t('common:us'), path: '/' },
    { name: t('common:poland'), path: '/country/pl' },
    { name: t('common:australia'), path: '/country/au' },
    { name: t('common:france'), path: '/country/fr' },
    { name: t('common:mexico'), path: '/country/mx' }
  ];

  return (
    <div
      className={classNames(style.sidebar, {
        [style.active]: isSidebarActive
      })}
    >
      <button onClick={closeSidebar} className={style.closeBtn}>
        <CloseBtn className={style.icon} />
      </button>
      <div className={style.list}>
        {countries.map((country) => (
          <NavLink
            to={country.path}
            className={({ isActive }) =>
              classNames(style.country, { [style.active]: isActive })
            }
            key={country.path}
            onClick={closeSidebar}
          >
            {country.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
