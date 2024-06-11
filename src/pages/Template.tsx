import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className: string;
};

function Template({ children, className }: Props) {
  return (
    <div
      className={classNames(
        'page-content',

        className
      )}
    >
      <div className="p-0 _container w-full flex flex-col flex-auto items-center relative z-[8]">{children}</div>
    </div>
  );
}

export default Template;
