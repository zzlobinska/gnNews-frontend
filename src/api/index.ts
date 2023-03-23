import ApiGet from 'src/api/client.js';

import { ArticlesRoutes } from './routes';

export const ArticlesApi = {
  getArticles(params: object) {
    return ApiGet(ArticlesRoutes.GET_ARTICLES, params);
  }
};
