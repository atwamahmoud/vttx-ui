import React from "react";
import {FC} from "react";
import {Variant} from "../../@types/common";
import {getClassName} from "../../utils/common";
import styles from "./button.module.css";

type ButtonProps = {
  text: string;
  type: "submit" | "button";
  variant: Variant;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Boolean|void;
};
console.log(styles);
const Button: FC<ButtonProps> = ({text, type, variant, onClick}) => (
  <button onClick={onClick} type={type} className={getClassName(variant, styles.button, styles)}>
    {text}
  </button>
);

export default Button;
