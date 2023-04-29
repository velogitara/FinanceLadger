import { GridBox, PersonName, PersonDescription } from './TeamGallery.styled';

import person1 from '../../images/team/person1.jpg';
import person1_2x from '../../images/team/person1@2x.jpg';
import person1_wp from '../../images/team/person1.webp';
import person1_2x_wp from '../../images/team/person1@2x.webp';
// 2
import person2 from '../../images/team/person2.jpg';
import person2_2x from '../../images/team/person2@2x.jpg';
import person2_wp from '../../images/team/person2.webp';
import person2_2x_wp from '../../images/team/person2@2x.webp';
//3
import person3 from '../../images/team/person3.jpg';
import person3_2x from '../../images/team/person3@2x.jpg';
import person3_wp from '../../images/team/person3.webp';
import person3_2x_wp from '../../images/team/person3@2x.webp';

const TeamGallery = () => {
  return (
    <GridBox>
      <li>
        <picture>
          <source
            srcSet={`${person1_wp} 1x, ${person1_2x_wp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${person1} 1x, ${person1_2x}.jpg 2x`}
            type="image/jpeg"
          />
          <img src={person1} alt="person1" />
        </picture>
        <PersonName>John Doe</PersonName>
        <PersonDescription>President</PersonDescription>
      </li>
      <li>
        <picture>
          <source
            srcSet={`${person2_wp} 1x, ${person2_2x_wp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${person2} 1x, ${person2_2x}.jpg 2x`}
            type="image/jpeg"
          />
          <img src={person2} alt="person2" />
        </picture>
        <PersonName>Jane Doe</PersonName>
        <PersonDescription>Vice president</PersonDescription>
      </li>
      <li>
        <picture>
          <source
            srcSet={`${person3_wp} 1x, ${person3_2x_wp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${person3} 1x, ${person3_2x}.jpg 2x`}
            type="image/jpeg"
          />
          <img src={person3} alt="person3" />
        </picture>
        <PersonName>Steve Smith</PersonName>
        <PersonDescription>Marketing Head</PersonDescription>
      </li>
    </GridBox>
  );
};

export default TeamGallery;
