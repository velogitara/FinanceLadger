import { List, ListItem } from './Navigation.styled';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  // const [scrollTop, setScrollTop] = useState(false);

  const [activeId, setActiveId] = useState(0);

  const values = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Cases' },
    { id: 4, text: 'Blog' },
    { id: 5, text: 'Contact' },
  ];

  // useEffect(() => {
  //   const handleScroll = event => {
  //     setScrollTop(window.scrollY);
  //     if (scrollTop > 0) {
  //       setActiveId(1);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollTop, activeId]);

  return (
    <>
      <List>
        {values.map(val => (
          <ListItem
            key={val.id}
            // onClick={() => setActiveId(val.id)}
            activeId={activeId}
            id={val.id}
          >
            <Link
              href={`#${val.text}`}
              onClick={() => setActiveId(val.id)}
              to={val.text}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {val.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Navigation;
