import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { type TypeRouter } from './router.types';

import routes from './routes';

import MainLayout from '@components/layouts/MainLayout';

const Router: React.FC = () => {
  const [firstRender, setFirstRender] = React.useState(true);

  React.useEffect(() => {
    setFirstRender(false);
  }, []);

  const location = useLocation();

  const transitions = useTransition(location, {
    unique: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {
      width: '100%',
      transform: 'translateY(0px)',
      position: 'absolute',
    },
    config: { duration: 300 },
    initial: firstRender ? { opacity: 1 } : undefined,
  });

  const pageRoutes = routes.map(({ path, title, element }: TypeRouter) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <>
      {transitions((props, item) => (
        <animated.div className="router-animate" style={props}>
          <Routes location={item}>
            <Route path="/" element={<MainLayout />}>
              {pageRoutes}
            </Route>
          </Routes>
        </animated.div>
      ))}
    </>
  );
};

export default Router;
