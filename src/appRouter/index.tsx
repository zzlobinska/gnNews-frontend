import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Page } from 'components';

import ArticlesList from 'src/features/ArticlesList';
import ErrorPage from 'src/features/ErrorPage';

export const router = createBrowserRouter([
  {
    element: <Page />,
    children: [
      { path: '/', element: <ArticlesList /> },
      { path: '/country/:id', element: <ArticlesList /> },
      { path: '*', element: <ErrorPage /> }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
