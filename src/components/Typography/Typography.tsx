import { FC } from 'react';
import { Props } from './type';

export const Typography: FC<Props> = ({ value, children }) => {
  return (
    <div>
      {value}
      {children}
    </div>
  );
};
