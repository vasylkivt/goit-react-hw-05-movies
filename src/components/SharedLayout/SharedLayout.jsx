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
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Container>
            <Section>
              <Outlet />
            </Section>
          </Container>
        </main>
      </Suspense>
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
