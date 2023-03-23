import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ArticlesApi } from 'src/api';
import { ArticleType } from 'src/constans/types';
import { RootState } from 'src/store';

import ArticleListItem from './components/ArticleListItem';
import ArticleTile from './components/ArticleTileItem';
import { setArticlesCount } from './slice';

import style from './ArticlesList.module.scss';

const ArticlesList = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const params = useParams();

  const showAsList = useSelector(
    (state: RootState) => state.articlesList.showAsList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await ArticlesApi.getArticles({
          country: params.id || 'pl'
        });
        setArticles(data.articles);
        dispatch(setArticlesCount(data.articles.length));
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className={classNames(style.content, { [style.tiles]: !showAsList })}>
      {articles.map((article) =>
        showAsList ? (
          <ArticleListItem key={article.url} article={article} />
        ) : (
          <ArticleTile key={article.url} article={article} />
        )
      )}
    </div>
  );
};

export default ArticlesList;
