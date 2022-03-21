/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Container = styled.section`
display: flex;
flex-direction: column;
gap: .3rem;
background: rgba(var(--primary-color), .4);
border-radius: .5rem;
box-shadow: 0mm 0mm 1mm rgba(var(--dark-blue), .5);
padding:  1rem;
h2 {
  color: rgb(var(--primary-color));
  margin: 0;
}
.cart-total {
  color: black;
  filter: contrast(60%);
}
@media(max-width: 450px) {
  background: none;
  box-shadow: none;
  padding: .25rem;
  h2 {
    display: none;
  }
  .cart-total {
    display: inline-block;
  }
}
@media(max-width: 350px) {
  .cart-total {
    display: none;
  }
}
`;

function SectionCart({ cart }) {

  const sumOfCart = cart.reduce((prev, curr) => prev + parseFloat(curr.price.slice(1)), 0);

  return (
    <Container>
      <h2>Cart</h2>
      <h2 className='cart-total'>Total: ${sumOfCart.toFixed(2)}</h2>
    </Container>
  );
}

export default SectionCart;
