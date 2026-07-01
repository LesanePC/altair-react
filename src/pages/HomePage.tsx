import { Intro } from '../components/home/Intro';
import { Works } from '../components/home/Works';
import { Features } from '../components/home/Features';
import { Team } from '../components/home/Team';
import { Callback } from '../components/home/Callback';

const HomePage = () => {
  return (
    <>
      <Intro />
      <Works />
      <Features />
      <Team />
      <Callback />
    </>
  );
};

export default HomePage;
