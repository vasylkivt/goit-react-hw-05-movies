import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const PageLoader = () => (
  <LoaderWrap>
    <FallingLines
      color="#4fa94d"
      width="200"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  </LoaderWrap>
);

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.black};
  opacity: 0.5;
`;
