/* eslint-disable react/prop-types */
// Libs
import { Card } from 'antd';
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
}
.ant-card-body {
  padding: .75rem;
}
`;

function SectionCart({ cart }) {
  return (
    <Container>
      <h2>Cart</h2>
      {!cart ? undefined : cart.map(item => {
        [item] = item;
        return(
          <Card key={item.id}>
            <span>{item.item_name}</span>
          </Card>
        );
      })}
    </Container>
  );
}

export default SectionCart;
