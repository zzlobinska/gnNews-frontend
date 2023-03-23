import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Page } from 'components';

import ArticlesList from 'src/features/ArticlesList';

export const router = createBrowserRouter([
  {
    element: <Page />,
    children: [
      { path: '/', element: <ArticlesList /> },
      { path: '/country/:id', element: <ArticlesList /> }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
