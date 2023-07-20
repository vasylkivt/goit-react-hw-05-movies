import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    transform: scale(1.03);

    box-shadow: 0 0 10px 0 ${({ theme: { colors } }) => colors.accent};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;
export const InfoWrap = styled.div`
  padding: 20px 10px;
`;

export const Title = styled.h2`
  margin-bottom: 5px;
`;

export const Text = styled.p``;
