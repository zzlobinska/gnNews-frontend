import placeholder from 'src/assets/img/placeholder.png';
import { ArticleType } from 'src/constans/types';
import { getDate } from 'src/utils/helpers';

import style from '../ArticleTileItem/ArticleTileItem.module.scss';

type ArticlePropsType = { article: ArticleType };

const ModalContent = ({ article }: ArticlePropsType) => {
  const { title, source, publishedAt, content, urlToImage, url, author } =
    article;

  return (
    <article className={style.modalArticle}>
      <div className={style.description}>
        <p className={style.source}>{source.name}</p>
        <p className={style.date}>{getDate(publishedAt)}</p>
      </div>
      <img
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholder;
        }}
        className={style.image}
        alt='an article thumbnail'
        src={urlToImage || ''}
      />
      <p>{author}</p>
      <h2 className={style.title}>{title}</h2>
      <p className={style.teaser}>{content}</p>
      <a target='_blank' className={style.link} href={url} rel='noreferrer'>
        Link do artykułu
      </a>
    </article>
  );
};
export default ModalContent;
