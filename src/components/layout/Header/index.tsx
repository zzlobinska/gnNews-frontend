import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { ReactComponent as Tiles } from 'src/assets/icons/grid-fill.svg';
import { ReactComponent as List } from 'src/assets/icons/layout-three-columns.svg';
import { ReactComponent as Menu } from 'src/assets/icons/list.svg';
import { showList, showTiles } from 'src/features/ArticlesList/slice';
import { RootState } from 'src/store';

import Button from '../Button';
import Logo from '../Logo';

import style from './Header.module.scss';

const Header = () => {
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
      <div className={style.container}>
        <div className={style.btns}>
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
        <Button title='Wiadomość' />
        <div className={style.btns}>
          <button className={style.button}>pl</button>
          <button className={style.button}>
            <Menu className={style.icon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
