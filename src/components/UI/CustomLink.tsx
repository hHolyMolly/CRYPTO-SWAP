import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props<T = string> = {
  className?: T;
  children: T;
  to: T;
};

const CustomLink: React.FC<Props> = ({ className, children, to }) => {
  return (
    <Link className={classNames('text-[#FBC12D] underline focus:underline hover:underline', className)} to={to}>
      {children}
    </Link>
  );
};

export default React.memo(CustomLink);
