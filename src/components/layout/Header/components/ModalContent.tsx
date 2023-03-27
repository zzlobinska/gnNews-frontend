import { useTranslation } from 'react-i18next';

import style from './ModalContent.module.scss';

const ModalContent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.content}>
      <h3 className={style.title}>{t('common:difficulty')}</h3>
      <p>{t('common:tests')}</p>
      <h3 className={style.title}>Fun</h3>
      <p>{t('common:fun_message')}</p>
    </div>
  );
};

export default ModalContent;
