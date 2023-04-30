import {
  TeamList,
  PersonName,
  PersonDescription,
  TeamItem,
  Overlay,
  Thumb,
  Picture,
  IconContainer,
  Svg,
} from './TeamGallery.styled';

import sprite from '../../images/SocialIcons/sprite.svg';

import { team } from 'data/team';

const TeamGallery = () => {
  const icons = ['Facebook', 'Twitter', 'Youtube', 'Instagram'];
  function Icon({ id, ...props }) {
    return (
      <Svg {...props}>
        <use href={`${sprite}#${id}`} />
      </Svg>
    );
  }
  return (
    <TeamList>
      {team.map(({ img, img2, imgWp, imgWp2, id, name, description }) => (
        <TeamItem key={id}>
          <Thumb>
            <Picture>
              <source srcSet={`${imgWp} 1x, ${imgWp2} 2x`} type="image/webp" />
              <source srcSet={`${img} 1x, ${img2}.jpg 2x`} type="image/jpeg" />
              <img src={img} alt={name} />
            </Picture>
            <Overlay>
              <IconContainer>
                {icons.map(id => {
                  return <Icon key={id} id={id} />;
                })}
              </IconContainer>
            </Overlay>
          </Thumb>

          <PersonName>{name}</PersonName>
          <PersonDescription>{description}</PersonDescription>
        </TeamItem>
      ))}
    </TeamList>
  );
};

export default TeamGallery;
