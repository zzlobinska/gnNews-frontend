import { createPortal } from 'react-dom';

import { ReactComponent as CloseBtn } from 'src/assets/icons/x-lg.svg';

import style from './Modal.module.scss';

type ModalContentProps = {
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal = (props: ModalContentProps) => {
  const { children, closeModal, isOpen } = props;

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div onClick={closeModal} className={style.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeBtn} onClick={closeModal}>
            <CloseBtn className={style.icon} />
          </button>
        </div>
        <div className={style.modalBody}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
