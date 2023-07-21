import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';

export const SearchIcon = styled(RiSearch2Line)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.textColorLight};

  transition: fill ${({ theme }) => theme.animation.cubicBezier};

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  max-width: 235px;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 30px;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  box-shadow: ${({ theme }) => theme.shadows.small};
  &:hover,
  &:focus-within {
    box-shadow: ${({ theme }) => theme.shadows.main};
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 40px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  cursor: pointer;
  outline: none;
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};
  &:hover svg {
    fill: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 50px;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;

  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};

  &::placeholder {
    font: inherit;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;
