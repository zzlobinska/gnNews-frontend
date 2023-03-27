import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showAsList = useSelector(
    (state: RootState) => state.articlesList.showAsList
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await ArticlesApi.getArticles({
          country: params.id || 'us'
        });
        setArticles(data.articles);
        dispatch(setArticlesCount(data.articles.length));
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, [params.id]);

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
        <div className={style.noArticles}>
          <p>{t('common:no_articles_found')}</p>
          <Link className={style.back} to='/'>
            {t('common:homepage')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
