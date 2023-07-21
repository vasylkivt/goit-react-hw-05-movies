import styled from 'styled-components';

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

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.textColorDark};
`;
