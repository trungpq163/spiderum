/* eslint-disable react-hooks/exhaustive-deps */
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { AllForYou } from './components/all-for-you/all-for-you';
import { BestArticlesOfTheMonth } from './components/best-articles-of-the-month/best-articles-of-the-month';
import { DontMiss } from './components/dont-miss/dont-miss';
import { HotMembers } from './components/hot-members/hot-members';
import { Banner, WrapperFor2Components } from './feature-main.styles';

export const FeatureMain: React.FC = () => {
  const bannerURL =
    'https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/40ff96a034c011ecb567655fead64d3e.jpeg';
  return (
    <MainLayout>
      <Banner src={bannerURL} />
      <DontMiss />
      <AllForYou />
      <WrapperFor2Components>
        <BestArticlesOfTheMonth />
        <HotMembers />
      </WrapperFor2Components>
    </MainLayout>
  );
};

export default FeatureMain;
