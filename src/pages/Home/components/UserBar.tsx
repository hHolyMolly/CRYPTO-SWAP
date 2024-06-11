import React from 'react';

const UserBar: React.FC = () => {
  return (
    <div
      className="p-[8px] flex items-center flex-auto rounded-[14px] backdrop-blur-[4px]"
      style={{ background: 'linear-gradient(270deg, rgba(53, 50, 43, 0.6) 0%, rgba(229, 215, 82, 0.6) 100%)' }}
    >
      <div className="mr-[8px]">
        <img src="" width={50} height={50} alt="" />
      </div>

      <div className="mr-[8px] flex flex-col flex-auto">
        <span className="font-semibold text-[16px] leading-[22px] text-white">yumenoami</span>

        <div className="inline-flex items-center">
          <svg className="mr-[6px] fill-yellow-200" width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3994 8.91645C9.24885 9.03091 9.11447 9.1653 9 9.31585C8.88554 9.1653 8.75115 9.03091 8.6006 8.91645C8.75115 8.80198 8.88554 8.6676 9 8.51705C9.11447 8.6676 9.24885 8.80198 9.3994 8.91645Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.602204 7.36033L2.65151 13.6839C2.78878 14.1075 3.21038 14.3716 3.65218 14.3163C4.86615 14.1642 7.27566 13.8927 9.00003 13.8927C10.7244 13.8927 13.1339 14.1642 14.3479 14.3163C14.7897 14.3716 15.2113 14.1075 15.3486 13.6839L17.3979 7.36033C17.6608 6.54895 16.7703 5.84971 16.0444 6.29765L13.9368 7.59838C13.475 7.88335 12.8681 7.70707 12.6309 7.21907L9.82445 1.44576C9.49007 0.757887 8.51 0.757886 8.17561 1.44576L5.36914 7.21907C5.13192 7.70707 4.52506 7.88335 4.0633 7.59838L1.95564 6.29765C1.22981 5.84971 0.339256 6.54894 0.602204 7.36033ZM8.32709 6.63495C8.55824 6.01028 9.44176 6.01028 9.67291 6.63495L9.99288 7.49966C10.0656 7.69605 10.2204 7.8509 10.4168 7.92357L11.2815 8.24354C11.9062 8.47469 11.9062 9.35821 11.2815 9.58936L10.4168 9.90933C10.2204 9.982 10.0656 10.1368 9.99288 10.3332L9.67291 11.1979C9.44176 11.8226 8.55824 11.8226 8.32709 11.1979L8.00712 10.3332C7.93445 10.1368 7.77961 9.982 7.58321 9.90933L6.7185 9.58936C6.09383 9.35821 6.09384 8.47469 6.71851 8.24354L7.58321 7.92357C7.77961 7.8509 7.93445 7.69605 8.00712 7.49966L8.32709 6.63495Z"
            />
          </svg>

          <span className="font-medium text-[14px] leading-[22px] text-yellow-200">#Top1</span>
        </div>
      </div>

      <div className="inline-flex items-center">
        <span className="mr-[4px] font-bold text-[16px] leading-[16px] text-white">9,999,999</span>

        <img src={require('@assets/img/icons/money.png')} width={32} height={32} alt="Money" />
      </div>
    </div>
  );
};

export default UserBar;
