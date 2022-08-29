import { type } from "os";
import * as S from "./styles";

type Props = {
  children?: any;
  primary?: boolean;
  fs?: string;
  h?: string;
  w?: string;
};

export const Button = ({ children, ...rest }: Props) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
