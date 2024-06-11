import Template from '@pages/Template';
import UserBar from './components/UserBar';
import Volume from './components/Volume';
import Balance from './components/Balance';

function Home() {
  return (
    <Template className="before:h-[135px] after:h-[270px] bg-[url('@assets/img/bg/home.png')]">
      <div className="mb-[24px] gap-[10px] w-full flex">
        <UserBar />

        <Volume />
      </div>

      <Balance />

      <div className="mr-[-70px]">
        <img src={require('@assets/img/crabs.png')} alt="Crabs" />
      </div>
    </Template>
  );
}

export default Home;
