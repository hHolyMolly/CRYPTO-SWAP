import { Outlet } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';

import Header from './Header';

function MainLayout() {
  return (
    <div
      className="
        min-h-full
        flex flex-col

        text-[14px]
        leading-[16px]
      "
    >
      {isMobile || isTablet ? (
        <div className="wrapper">
          <Header />

          <main className="flex flex-col flex-auto">
            <Outlet />
          </main>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-auto">Приложение доступно только для мобильных устройств</div>
      )}
    </div>
  );
}

export default MainLayout;
