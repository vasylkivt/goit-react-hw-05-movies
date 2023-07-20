import { Container, Footer, Header, Section } from 'components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Logo, Wrap, StyledLink, Nav } from './SharedLayout.style';

export const SharedLayout = () => {
  return (
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
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </Suspense>
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
  );
};
