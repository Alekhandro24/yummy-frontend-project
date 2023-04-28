import {
  Image,
  Information,
  Card,
  Description,
  Title,
  TitleWrapper,
  TimeWrapper,
  Time,
} from './RecipeItem.styled';
import { NavLinkSkew } from 'components/NavLinkSkew/NavLinkSkew';

import { DeleteBtn } from '../Button/DeleteBtn/DeleteBtn';
import { useMedia } from 'hooks/useMedia';
import { useNavigate } from 'react-router-dom';

export const RecipeItem = ({ img, title, text, time, location, id }) => {
  const { isTablet } = useMedia();
  const navigate = useNavigate();
  const onClick = id => navigate(`/recipe/${id}`, { replace: true });
  return (
    <Card location={location}>
      {!isTablet && location === 'favorite' ? (
        <Image location={location} onClick={() => onClick(id)}>
          <img src={img} alt={title} />
        </Image>
      ) : (
        <Image location={location} onClick={() => onClick(id)}>
          <img src={img} alt={title} />
        </Image>
      )}

      <Information location={location}>
        <TitleWrapper location={location}>
          <Title>{title}</Title>

          {location === 'favorite' && (
            <DeleteBtn location={location} id={id} navigate={`/favorites`} />
          )}
          {location === 'recipes' && (
            <DeleteBtn location={location} id={id} navigate={`/my`} />
          )}
        </TitleWrapper>

        <Description location={location}>
          {text.length > 80 ? `${text.substring(0, 80)}...` : text}
        </Description>

        <TimeWrapper>
          <Time>{time}</Time>

          <NavLinkSkew
            navigate={`/recipe/${id}`}
            location={location}
            text="See recipe"
            styled={location === 'favorite' ? 'black' : 'olive'}
          />
          {/* )} */}
        </TimeWrapper>
      </Information>
    </Card>
  );
};
