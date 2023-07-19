import styled from 'styled-components';
export const MovieWrap = styled.div`
  display: flex;
  gap: 50px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 850px;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 120px;
  margin-bottom: 40px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const InfoItem = styled.li`
  display: flex;
`;

export const Name = styled.p`
  min-width: 135px;
  font-weight: 600;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
