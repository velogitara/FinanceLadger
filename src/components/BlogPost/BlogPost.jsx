import { Container } from 'helpers/common-styles/Container';
import { BlogSection, TextBox, P, H2, ReadBtn } from './BlogPost.styled';
const BlogPost = () => {
  return (
    <BlogSection id="Blog">
      <Container>
        <TextBox>
          <P>April 28 2023</P>
          <H2>Blog Post One</H2>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </P>
          <ReadBtn>Read Our Blog</ReadBtn>
        </TextBox>
      </Container>
    </BlogSection>
  );
};

export default BlogPost;
