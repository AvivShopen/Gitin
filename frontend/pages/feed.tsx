import type { NextPage } from 'next';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import InjectHead from '../components/common/InjectHead';
import FeedSection from '../components/FeedSection/FeedSection';
import GlobalSection from '../components/GlobalSection/GlobalSection';
import UserSection from '../components/UserSection/UserSection';

const Feed: NextPage = () => {
  return (
    <>
      <InjectHead />
      <AppWrapper>
        <GlobalSection />
        <FeedSection />
        <UserSection />
      </AppWrapper>
    </>
  );
};

export default Feed;
