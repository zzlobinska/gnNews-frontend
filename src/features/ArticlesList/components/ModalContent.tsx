import { ArticleType } from 'src/constans/types';

import style from './ArticleTile.module.scss';

type ArticlePropsType = { article: ArticleType };

const ModalContent = ({ article }: ArticlePropsType) => {
  const { title, source, publishedAt, content, urlToImage, url, author } = article;
  const date = new Date(publishedAt).toLocaleDateString();
  const hour = new Date(publishedAt).toLocaleString('pl', {
    hour: 'numeric',
    minute: 'numeric'
  });
  return (
    <article className={style.modalArticle}>
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
      <p>{author}</p>
      <h2 className={style.title}>{title}</h2>
      <p className={style.teaser}>{content}</p>
      <a className={style.link} href={url}>Link do artykułu</a>
    </article>
  );
};
export default ModalContent;
