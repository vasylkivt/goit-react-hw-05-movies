import styled from 'styled-components';

export const Button = styled.button`
  margin-left: ${({ $marginLeft }) => (!$marginLeft ? '0' : $marginLeft)};
  margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? 0 : $marginBottom)};

  display: block;

  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(10)};

  color: ${({ theme }) => theme.colors.textColorLight};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};

  border-radius: ${({ theme }) => theme.spacing(5)};

  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
`;
