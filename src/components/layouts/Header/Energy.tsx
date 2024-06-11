import React from 'react';

const Energy: React.FC = () => {
  const percent = 90;

  return (
    <div className="mb-[16px] flex flex-col">
      <div className="mb-[4px] mx-auto flex items-center">
        <img className="mr-[4px]" src={require('@assets/img/burgers/1-5.png')} width={40} height={40} alt="Burger" />

        <span className="font-bold text-[16px] leading-[16px] text-white">800/1000</span>
      </div>

      <div className="mx-auto max-w-[314px] w-full h-[16px] rounded-[100px] backdrop-blur-[2px] bg-[rgba(91,75,35,0.60)]">
        <div
          className="h-full rounded-[100px] shadow-[-4px_0px_4px_0px_#E5C97FBF_inset]"
          style={{ width: `${percent}%`, background: 'linear-gradient(90deg, #FBC12D 0%, #EDC765 100%)' }}
        />
      </div>
    </div>
  );
};

export default Energy;
