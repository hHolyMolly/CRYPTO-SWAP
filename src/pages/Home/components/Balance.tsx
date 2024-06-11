import React from 'react';

const Balance: React.FC = () => {
  return (
    <div className="mb-[56px] mx-auto flex flex-col justify-center">
      <span className="text-center font-medium text-[14px] leading-[22px] text-[#DBE5EF]">BALANCE</span>

      <div className="flex items-center">
        <span className="mr-[8px] font-bold text-[54px] leading-[54px] text-white">10999</span>

        <img src={require('@assets/img/icons/money.png')} width={50} height={50} alt="Money" />
      </div>
    </div>
  );
};

export default Balance;
