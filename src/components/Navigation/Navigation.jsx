import { List } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <List>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Cases">Cases</a>
        </li>
        <li>
          <a href="#Blog">Blog</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </List>
    </>
  );
};

export default Navigation;
