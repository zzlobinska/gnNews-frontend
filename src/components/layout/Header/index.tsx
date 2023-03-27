import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { ReactComponent as Tiles } from 'src/assets/icons/grid-fill.svg';
import { ReactComponent as List } from 'src/assets/icons/layout-three-columns.svg';
import { ReactComponent as Menu } from 'src/assets/icons/list.svg';
import { Button, Sidebar } from 'src/components';
import { Logo } from 'src/components';
import { showList, showTiles } from 'src/features/ArticlesList/slice';
import { RootState } from 'src/store';

import style from './Header.module.scss';

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const openSidebar = () => setIsSidebarActive(true);

  const dispatch = useDispatch();

  const showAsListHandler = () => {
    dispatch(showList());
  };
  const showAsTilesHandler = () => {
    dispatch(showTiles());
  };

  const isListActive = useSelector(
    (state: RootState) => state.articlesList.showAsList
  );

  return (
    <header className={style.header}>
      <Logo />

        
          <div className={style.displayBtns}>
            <button
              onClick={showAsTilesHandler}
              className={classNames(style.button, {
                [style.active]: !isListActive
              })}
            >
              <Tiles className={style.icon} />
            </button>
            <button
              onClick={showAsListHandler}
              className={classNames(style.button, {
                [style.active]: isListActive
              })}
            >
              <List className={classNames(style.icon, style.rotated)} />
            </button>
          </div>
          <Button className={style.message} title='Wiadomość' />
        
        <div className={style.menuBtns}>
          <button className={style.button}>pl</button>
          <button className={style.button} onClick={openSidebar}>
            <Menu className={style.icon} />
          </button>
        </div>


      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
      />
    </header>
  );
};

export default Header;
