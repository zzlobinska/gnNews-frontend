import { useState } from 'react';

import { Button } from 'src/components';
import Modal from 'src/components/layout/Modal';
import { ArticleType } from 'src/constans/types';

import ModalContent from './ModalContent';

import style from './ArticleTile.module.scss';

type ArticlePropsType = { article: ArticleType };

const ArticleTile = ({ article }: ArticlePropsType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => setIsModalOpen(false);

  const { title, source, publishedAt, description, urlToImage } = article;
  const date = new Date(publishedAt).toLocaleDateString();
  const hour = new Date(publishedAt).toLocaleString('pl', {
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <a onClick={() => setIsModalOpen(true)}>
      <article className={style.article}>
        <div className={style.description}>
          <p className={style.source}>{source.name}</p>
          <p className={style.date}>
            {date} {hour}
          </p>
        </div>
        <img
          className={style.image}
          alt='an article thumbnail'
          src={urlToImage || ''}
        />
        <h2 className={style.title}>{title}</h2>
        <p className={style.teaser}>{description}</p>
        <Modal closeModal={closeModal} isOpen={isModalOpen}>
          <ModalContent article={article} />
        </Modal>
      </article>
    </a>
  );
};

export default ArticleTile;
