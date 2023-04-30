import TeamSection from 'components/TeamSection/TeamSection';
import Cases from '../../components/Cases';
import BlogPost from 'components/BlogPost';
import CallbackSection from 'components/CallbackSection/CallbackSection';
import About from '../../components/About';
import Hero from 'components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Cases />
      <BlogPost />
      <TeamSection />
      <CallbackSection />
    </>
  );
};

export default HomePage;
