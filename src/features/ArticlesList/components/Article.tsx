import { ArticleType } from 'src/constans/types';

import style from '../ArticlesList.module.scss';

type ArticlePropsType = { article: ArticleType };

const Article = ({ article }: ArticlePropsType) => {
  const { title, source, publishedAt } = article;
  const date = new Date(publishedAt).toDateString;
  console.log(date);
  return (
    <article className={style.article}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.description}>
        <p className={style.source}>{source.name}</p>
        <p className={style.date}>{date}</p>
      </div>
    </article>
  );
};

export default Article;
