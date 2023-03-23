import Article from './components/Article';

import style from './ArticlesList.module.scss';

const ArticlesList = () => {
  return (
    <div className={style.content}>
      <Article />
    </div>
  );
};

export default ArticlesList;
