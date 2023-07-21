import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';

export const ScrollToTop = () => {
  const { ref, inView /* , entry */ } = useInView({
    rootMargin: '200px 0px 0px 0px',
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Wrap ref={ref} className={inView ? '' : 'visible'}>
        <ScrollToTopIcon onClick={scrollToTop} aria-label="Scroll to top" />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  opacity: 0;
  visibility: hidden;
  z-index: 20;
  transition: all 0.35s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;

const ScrollToTopIcon = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  opacity: 0.7;
  background-color: #062541;

  border: 2px solid #3ed3ac;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #3ed3ac;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};
  animation: moveBtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation-play-state: paused;
    opacity: 1;
    box-shadow: 0 0 10px 0 ${({ theme: { colors } }) => colors.accent};
    background-color: #f8f8f8;
    color: #062541;
    border: 2px solid #062541;
  }
  @keyframes moveBtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
