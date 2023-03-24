import classNames from 'classnames';

import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  className?: string;
};

const Button = ({ title, className }: ButtonPropsType) => {
  return (
    <button className={classNames(style.button, className)}>{title}</button>
  );
};

export default Button;
