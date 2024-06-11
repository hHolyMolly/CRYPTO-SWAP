import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  title: string;
  to: string;
  src: string;
};

const MenuItem: React.FC<Props> = ({ title, to, src }) => {
  return (
    <li className="menu-item">
      <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={to}>
        <img src={src} alt={title} />
      </NavLink>
    </li>
  );
};

export default React.memo(MenuItem);
