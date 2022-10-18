import { ButtonHTMLAttributes } from "react";
import * as Styled from "./styles";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLargeProps = {
  value: string;
  variant?: "disabled" | "cancel" | "delete";
} & ButtonType;

const ButtonLarge = ({ variant, value, ...props }: ButtonLargeProps) => {
  return (
    <Styled.ButtonLarge type="submit" {...props} variant={variant}>
      {value}
    </Styled.ButtonLarge>
  );
};

export default ButtonLarge;
