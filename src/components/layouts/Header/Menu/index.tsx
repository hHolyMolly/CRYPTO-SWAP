import './menu.scss';

import paths from '@configs/Router/paths';

import MenuItem from './MenuItem';

function Menu() {
  return (
    <nav className="py-[14px]">
      <ul className="gap-[10px] md:gap-[16px] flex justify-center items-center">
        <MenuItem title="home" to={paths.Home} src={require('@assets/img/icons/home.svg')} />

        <MenuItem title="boost" to={paths.Boost} src={require('@assets/img/icons/boost.svg')} />

        <MenuItem title="ratings" to={paths.Ratings} src={require('@assets/img/icons/ratings.svg')} />

        <MenuItem title="quests" to={paths.Quests} src={require('@assets/img/icons/quests.svg')} />

        <MenuItem title="ref" to={paths.Ref} src={require('@assets/img/icons/ref.svg')} />
      </ul>
    </nav>
  );
}

export default Menu;
