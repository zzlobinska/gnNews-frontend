import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ArticlesApi } from 'src/api';
import { ArticleType } from 'src/constans/types';

import Article from './components/Article';

import style from './ArticlesList.module.scss';

const ArticlesList = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const params = useParams();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await ArticlesApi.getArticles({
          country: params.id || 'pl'
        });
        setArticles(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className={style.content}>
      {articles.map((article) => (
        <Article key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
