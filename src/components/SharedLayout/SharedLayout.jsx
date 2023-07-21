import {
  Container,
  Footer,
  Header,
  PageLoader,
  Section,
  ScrollToTop,
} from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Logo, Wrap, StyledLink, Nav } from './SharedLayout.style';

export const SharedLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Wrap>
        <Container>
          <Header>
            <Logo to={'/'}>tmdb</Logo>
            <Nav>
              <StyledLink to={'/'}>Home</StyledLink>
              <StyledLink to={'movies'}>Movies</StyledLink>
            </Nav>
          </Header>
        </Container>
        <main>
          <Container>
            <Section>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </Section>
          </Container>
        </main>
        <Container>
          <Footer>
            <Nav>
              <StyledLink to={'/'}>Home</StyledLink>
              <StyledLink to={'movies'}>Movies</StyledLink>
            </Nav>
          </Footer>
        </Container>
      </Wrap>
    </>
  );
};
