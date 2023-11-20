import { FC } from 'react';
import { Props } from './type';

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
