import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
};

const Button = ({ title }: ButtonPropsType) => {
  return <button className={style.button}>{title}</button>;
};

export default Button;
