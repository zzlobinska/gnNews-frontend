import { ArticleType } from 'src/constans/types';

import style from './ArticleList.module.scss';

type ArticlePropsType = { article: ArticleType };

const ArticleList = ({ article }: ArticlePropsType) => {
  const { title, source, publishedAt } = article;
  const date = new Date(publishedAt).toLocaleDateString();
  const hour = new Date(publishedAt).toLocaleString('pl', {
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <article className={style.article}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.description}>
        <p className={style.source}>{source.name}</p>
        <p className={style.date}>
          {date} {hour}
        </p>
      </div>
    </article>
  );
};

export default ArticleList;
