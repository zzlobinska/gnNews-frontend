import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components';

import style from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <p className={style.errorText}>404</p>
      <Button onClick={() => navigate(-1)} title={t('common:go_back')} />
    </div>
  );
};

export default ErrorPage;
