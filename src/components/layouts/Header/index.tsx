import { useLocation } from 'react-router-dom';

import paths from '@configs/Router/paths';

import Container from '../Container';
import Menu from './Menu';
import { CustomLink } from '@components/UI';
import Energy from './Energy';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="pb-[24px] sm:pb-[34px] w-full fixed bottom-0 left-0 z-20">
      <Container>
        {pathname === paths.Home && <Energy />}

        <Menu />

        <div className="text-center text-white">
          How to play? <CustomLink to={paths.Faq}>Learn more</CustomLink>
        </div>
      </Container>
    </header>
  );
}

export default Header;
