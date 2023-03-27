import style from './ModalContent.module.scss';

const ModalContent = () => {
  return (
    <div className={style.content}>
      <div>
        <h3 className={style.title}>Trudność</h3>
        <p>Testy!</p>
      </div>
      <div>
        <h3 className={style.title}>Fun</h3>
        <p>Config projektu, budowanie komponentów</p>
      </div>
    </div>
  );
};

export default ModalContent;
