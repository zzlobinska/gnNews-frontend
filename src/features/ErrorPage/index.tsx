import { useTranslation } from 'react-i18next';

import NotFound from 'src/components/layout/NotFound';

const ErrorPage = () => {
  const { t } = useTranslation();

  return <NotFound title='404' linkName={t('common:go_back')} link='/' />;
};

export default ErrorPage;
