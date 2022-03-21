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
.ant-card {
  background: rgb(var(--primary-color));
  border: 1px solid rgb(var(--secondary-color));
  border-radius: .5rem;
  filter: contrast(110%);
  .list-and-x {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-name {
      padding: 0 .5rem;
    }
    .ant-btn {
      line-height: 0;
      border: none;
      padding: 0;
    }
  }
}
.ant-card-body {
  padding: .2rem .75rem;
}
.cart-total {
  color: black;
  filter: contrast(60%);
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
