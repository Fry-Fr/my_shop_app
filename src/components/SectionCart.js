/* eslint-disable react/prop-types */
// Libs
import { Card, Button } from 'antd';
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
`;

function SectionCart({ cart, removeCartItem, dispatch }) {

  const handleRemove = (e) => {
    dispatch(removeCartItem(e.currentTarget.id));
  };

  return (
    <Container>
      <h2>Cart</h2>
      {!cart ? undefined : cart.map((item, index) => {
        return(
          <Card key={index}>
            <div className='list-and-x'>
              <span className='item-name'>{item.item_name}</span>
              <Button id={index} onClick={handleRemove} title='remove' type='danger' ghost>X</Button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default SectionCart;
