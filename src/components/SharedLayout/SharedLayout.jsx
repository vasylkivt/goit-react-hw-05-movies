import { Container, Footer, Header, Section } from 'components';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
          </nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Section>
            <Container>
              <Outlet />
            </Container>
          </Section>
        </Suspense>
      </main>
      <Footer>
        <Container>
          <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
          </nav>
        </Container>
      </Footer>
    </>
  );
};
