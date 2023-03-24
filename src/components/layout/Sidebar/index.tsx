import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as CloseBtn } from 'src/assets/icons/x-lg.svg';

import style from './Sidebar.module.scss';

type SidebarPropsType = {
  setIsSidebarActive: Dispatch<SetStateAction<boolean>>;
  isSidebarActive: boolean;
};

const countries = [
  { name: 'Polska 🇵🇱', path: '/' },
  { name: 'USA 🇺🇸', path: '/country/us' },
  { name: 'Australia 🇦🇺', path: '/country/au' },
  { name: 'Francja 🇫🇷 ', path: '/country/fr' },
  {name: 'Meksyk 🇮🇷', path: '/country/mx'}
];

const Sidebar = ({ setIsSidebarActive, isSidebarActive }: SidebarPropsType) => {
  const closeSidebar = () => setIsSidebarActive(false);
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
          >
            {country.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
