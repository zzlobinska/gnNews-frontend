import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components';

import style from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <p className={style.errorText}>404</p>
      <Button onClick={() => navigate(-1)} title='Powrót' />
    </div>
  );
};

export default ErrorPage;
