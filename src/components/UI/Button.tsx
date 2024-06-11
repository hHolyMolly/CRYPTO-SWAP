import React from 'react';
import classNames from 'classnames';

import { type TypeStatus } from 'interfaces/status.types';

import { LoadingIcon } from '@components/icons';

type Props<T = React.ReactNode> = {
  children: T;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  status?: TypeStatus;
  before?: T;
  after?: T;
};

const Button: React.FC<Props> = ({ children, className, style, onClick, type = 'button', status = 'loaded', before, after }) => {
  const onClickButton = React.useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <button
      className={classNames(
        `
          px-[25px]
          min-h-[45px]
          inline-flex justify-center items-center
          rounded-lg
          bg-blue-500

          text-white
		    `,
        className,

        // loading
        status === 'loading' && 'pointer-events-none opacity-60',

        // error
        'disabled:pointer-events-none disabled:opacity-60'
      )}
      style={style}
      onClick={onClickButton}
      type={type}
      disabled={status === 'error'}
    >
      {before && <i className="mr-[10px]">{before}</i>}
      {status !== 'loading' ? children : <LoadingIcon />}
      {after && <i className="ml-[10px]">{after}</i>}
    </button>
  );
};

export default React.memo(Button);
