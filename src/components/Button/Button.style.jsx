import styled from 'styled-components';

export const Button = styled.button`
  display: block;

  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? 0 : $marginBottom)};
  margin-left: ${({ $marginLeft }) => (!$marginLeft ? '0' : $marginLeft)};
  margin-right: auto;

  padding: 15px 30px;
  border-radius: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};

  color: ${({ theme }) => theme.colors.textColorLight};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};

  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
`;
