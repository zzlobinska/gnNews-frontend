import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { ReactComponent as Tiles } from 'src/assets/icons/grid-fill.svg';
import { ReactComponent as List } from 'src/assets/icons/layout-three-columns.svg';
import { ReactComponent as Menu } from 'src/assets/icons/list.svg';
import { Button, Modal, Sidebar } from 'src/components';
import { Logo } from 'src/components';
import { showList, showTiles } from 'src/features/ArticlesList/slice';
import { RootState } from 'src/store';

import ModalContent from './components/ModalContent';

import style from './Header.module.scss';

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openSidebar = () => setIsSidebarActive(true);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const showAsListHandler = () => {
    dispatch(showList());
  };
  const showAsTilesHandler = () => {
    dispatch(showTiles());
  };

  const isListActive = useSelector(
    (state: RootState) => state.articlesList.showAsList
  );

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <Button
        onClick={() => setIsModalOpen(true)}
        className={style.message}
        title={t('common:message')}
      />

      <div className={style.menuBtns}>
        <select
          onChange={(e) => changeLanguageHandler(e.target.value)}
          className={style.button}
        >
          <option selected value='pl'>
            pl
          </option>
          <option value='en'>en</option>
        </select>
        <button className={style.button} onClick={openSidebar}>
          <Menu className={style.icon} />
        </button>
      </div>

      <Sidebar
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
      />
      <Modal closeModal={closeModal} isOpen={isModalOpen}>
        <ModalContent />
      </Modal>
    </header>
  );
};

export default Header;
