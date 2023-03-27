import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ArticlesApi } from 'src/api';
import NotFound from 'src/components/layout/NotFound';
import { ArticleType } from 'src/constans/types';
import { RootState } from 'src/store';

import ArticleListItem from './components/ArticleListItem';
import ArticleTile from './components/ArticleTileItem';
import { setArticlesCount } from './slice';

import style from './ArticlesList.module.scss';

const ArticlesList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const params = useParams();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showAsList = useSelector(
    (state: RootState) => state.articlesList.showAsList
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const { data } = await ArticlesApi.getArticles({
          country: params.id || 'us'
        });
        setArticles(data.articles);
        dispatch(setArticlesCount(data.articles.length));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, [params.id]);

  if (isLoading) {
    return <NotFound title='Ładowanie...' />;
  }

  return (
    <div className={classNames(style.content, { [style.tiles]: !showAsList })}>
      {articles.length > 0 ? (
        articles.map((article) =>
          showAsList ? (
            <ArticleListItem key={article.url} article={article} />
          ) : (
            <ArticleTile key={article.url} article={article} />
          )
        )
      ) : (
        <NotFound
          title={t('common:no_articles_found')}
          link='/'
          linkName={t('common:homepage')}
        />
      )}
    </div>
  );
};

export default ArticlesList;
