import styled from 'styled-components';

export const Notification = styled.p`
  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(10)};
  text-align: center;

  text-align: ${({ $textAlign }) => (!$textAlign ? 'left' : $textAlign)};
  margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? 0 : $marginBottom)};
`;
