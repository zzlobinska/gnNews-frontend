import style from '../ArticlesList.module.scss';

const Article = () => {
  return (
    <article className={style.article}>
      <h2 className={style.title}>Artykuł o kotkach</h2>
      <div className={style.description}>
        <p className={style.source}>Instytut danych</p>
        <p className={style.date}>11.12.2001 18:40</p>
      </div>
    </article>
  );
};

export default Article;
