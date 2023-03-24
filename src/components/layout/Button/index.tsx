import classNames from 'classnames';

import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ title, className, onClick }: ButtonPropsType) => {
  return (
    <button onClick={onClick} className={classNames(style.button, className)}>
      {title}
    </button>
  );
};

export default Button;
