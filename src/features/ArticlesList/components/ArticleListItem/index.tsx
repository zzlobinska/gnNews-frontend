import { useState } from 'react';

import { Modal } from 'src/components';
import { ArticlePropsType } from 'src/constans/types';
import { getDate } from 'src/utils/helpers';

import ModalContent from '../ModalContent';

import style from './ArticleListItem.module.scss';

const ArticleList = ({ article }: ArticlePropsType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);
  const { title, source, publishedAt } = article;

  return (
    <a className={style.article} onClick={() => setIsModalOpen(true)}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.description}>
        <p className={style.source}>{source.name}</p>
        <p className={style.date}>{getDate(publishedAt)}</p>
      </div>
      <Modal closeModal={closeModal} isOpen={isModalOpen}>
        <ModalContent article={article} />
      </Modal>
    </a>
  );
};

export default ArticleList;
