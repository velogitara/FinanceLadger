import TeamSection from 'components/TeamSection/TeamSection';
import Cases from '../../components/Cases';
import BlogPost from 'components/BlogPost';
import CallbackSection from 'components/CallbackSection/CallbackSection';

const HomePage = () => {
  return (
    <>
      <Cases />
      <BlogPost />
      <TeamSection />
      <CallbackSection />
    </>
  );
};

export default HomePage;
