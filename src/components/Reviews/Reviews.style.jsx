import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorDark};
`;

export const Item = styled.li``;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
export const TextWrap = styled.div``;
export const Name = styled.p``;
export const Rating = styled.p``;
export const CommentWrap = styled.div``;

export const Comment = styled.p`
  margin-bottom: 5px;
  color: ${({ theme: { colors } }) => colors.textColorLight};
`;
export const Date = styled.p`
  color: ${({ theme: { colors } }) => colors.yellow};
`;
