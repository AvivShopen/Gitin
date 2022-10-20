import type { NextPage } from 'next';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import InjectHead from '../components/common/InjectHead';

const Home: NextPage = () => {
  return (
    <>
      <InjectHead />
      <AppWrapper></AppWrapper>
    </>
  );
};

export default Home;
