import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        p-[8px]
        inline-flex justify-center items-center
        rounded-[8px]
        bg-yellow-600
        
        uppercase font-bold text-[16px] leading-[16px] text-yellow-800
      "
    >
      {children}
    </div>
  );
};

export default Title;
