import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="_container">{children}</div>;
}

export default React.memo(Container);
