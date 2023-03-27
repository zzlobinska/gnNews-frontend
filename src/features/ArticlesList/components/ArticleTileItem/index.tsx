import { useState } from 'react';

import placeholder from 'src/assets/img/placeholder.png';
import { Modal } from 'src/components';
import { ArticlePropsType } from 'src/constans/types';
import { getDate } from 'src/utils/helpers';

import ModalContent from '../ModalContent';

import style from './ArticleTileItem.module.scss';

const ArticleTile = ({ article }: ArticlePropsType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);

  const { title, source, publishedAt, description, urlToImage } = article;

  return (
    <>
      <a onClick={() => setIsModalOpen(true)}>
        <article className={style.article}>
          <div className={style.description}>
            <p className={style.source}>{source.name}</p>
            <p className={style.date}>{getDate(publishedAt)}</p>
          </div>
          <img
            className={style.image}
            alt='an article thumbnail'
            src={urlToImage || ''}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = placeholder;
            }}
          />
          <h2 className={style.title}>{title}</h2>
          <p className={style.teaser}>{description}</p>
        </article>
      </a>
      <Modal closeModal={closeModal} isOpen={isModalOpen}>
        <ModalContent article={article} />
      </Modal>
    </>
  );
};

export default ArticleTile;
