import TeamSection from 'components/TeamSection/TeamSection';
import Cases from '../../components/Cases';
import BlogPost from 'components/BlogPost';
import CallbackSection from 'components/CallbackSection/CallbackSection';
import Header from '../../components/Header/';
import About from '../../components/About';

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Cases />
      <BlogPost />
      <TeamSection />
      <CallbackSection />
    </>
  );
};

export default HomePage;
