import {
  BlogSection,
  TextBox,
  P,
  H2,
  ReadBtn,
  BlogContainer,
  Picture,
  BlogPictureTextWrapper,
} from './BlogPost.styled';

import Blog from '../../images/home/blog.jpg';
import Blog2x from '../../images/home/blog@2x.jpg';
import BlogWp from '../../images/home/blog.webp';
import BlogWp2x from '../../images/home/blog@2x.webp';

const BlogPost = () => {
  return (
    <BlogSection id="Blog">
      <BlogContainer>
        <BlogPictureTextWrapper>
          <div>
            <Picture>
              <source
                srcSet={`${BlogWp} 1x, ${BlogWp2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${Blog} 1x, ${Blog2x}.jpg 2x`}
                type="image/jpeg"
              />
              <img src={Blog} alt="Blog" />
            </Picture>
          </div>
          <TextBox>
            <P>April 28 2023</P>
            <H2>Blog Post One</H2>
            <P>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </P>
            <ReadBtn>Read Our Blog</ReadBtn>
          </TextBox>
        </BlogPictureTextWrapper>
      </BlogContainer>
    </BlogSection>
  );
};

export default BlogPost;
