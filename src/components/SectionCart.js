// Libs
import styled from 'styled-components';

const Container = styled.section`
background: rgba(var(--primary-color), .4);
border-radius: .5rem;
box-shadow: 0mm 0mm 1mm rgba(var(--dark-blue), .5);
padding:  1rem;
h2 {
  color: rgb(var(--primary-color));
  margin: 0;
}
`;

function SectionCart() {
  return (
    <Container>
      <h2>Cart</h2>
    </Container>
  );
}

export default SectionCart;
