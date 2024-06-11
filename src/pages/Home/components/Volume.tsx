import React from 'react';

import { useAppDispatch, useAppSelector } from '@store';
import { setVolume } from '@store/slices/user';

const Volume: React.FC = () => {
  const dispatch = useAppDispatch();
  const { is_volume } = useAppSelector(({ user }) => user);

  const onClickVolume = () => {
    dispatch(setVolume(!is_volume));
  };

  return (
    <button
      className="
			w-[66px] h-[66px] flex-[0_0_66px]
			flex justify-center items-center
			rounded-[8px]

			active:scale-[0.95]
		"
      style={{ background: 'linear-gradient(270deg, rgba(53, 50, 43, 0.8) 0%, rgba(128, 104, 45, 0.8) 100%)' }}
      onClick={onClickVolume}
      type="button"
    >
      <img src={require('@assets/img/icons/volume-true.svg')} style={{ display: is_volume ? 'block' : 'none' }} width={26} height={24} alt="Volume" />

      <img src={require('@assets/img/icons/volume-false.svg')} style={{ display: is_volume ? 'none' : 'block' }} width={21} height={24} alt="Volume" />
    </button>
  );
};

export default Volume;
