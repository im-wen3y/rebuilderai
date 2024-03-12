import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '@views/layout/Header';

const LayoutPage = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <Outlet />
      </InnerContainer>
    </Container>
  );
};

export default LayoutPage;

const Container = styled.main`
  background-color: #000;
`;

const InnerContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 1280px) {
    max-width: 1200px;
  }
  @media (min-width: 1025px) {
    /* max-width: 1200px; */
  }
  @media (min-width: 769px) {
    /* max-width: 1200px; */
  }
  @media (min-width: 601px) {
    /* max-width: 1200px; */
  }
`;
