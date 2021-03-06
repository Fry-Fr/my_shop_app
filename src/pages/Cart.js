/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Modal, Col, Table, Row, Button } from 'antd';
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons';

const Container = styled.div`
@media(max-width: 600px) {
  .ant-row {
    flex-direction: column;
  }
  .ant-col {
    margin: 0 auto;
    width: 75%;
    max-width: none;
  }
}
@media(max-width: 400px) {
  .ant-col {
    width: 90%;
  }
}
`;

const TableContainer = styled.div`
.cart-pg-title {
  background-color: rgba(var(--primary-color), .4);
  border-radius: .25rem;
  h2 {
    text-decoration: underline;
    color: #fff;
    filter: contrast(90%);
  }
}
.ant-table {
  background-color: rgba(var(--primary-color), .4);
  .ant-table-thead th {
    background-color: rgba(var(--primary-color), .4);
  }
  .ant-table-tbody {
    .ant-table-placeholder td {
      background-color: rgba(var(--primary-color), .4);
    }
    .ant-table-cell-row-hover {
      background-color: rgba(var(--primary-color), .4);
    }
  }
  .ant-empty-image {
    display: none;
  }
  .ant-empty-description {
    font-size: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
  }
  .ant-empty-description::after {
    visibility: visible;
    content: "Cart is Empty";
    font-weight: bold;
    font-size: 1.25rem;
  }
  .ant-table-footer {
    background-color: rgba(var(--primary-color), .4);
  }
}
.quantity-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

const SideOfCart = styled.div`
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
.ant-btn {
  background-color: rgb(var(--orange));
  border-color: rgb(var(--silver));
  filter: contrast(60%);
  &:hover {
    filter: contrast(85%);
  }
}
@media(max-width: 600px) {
  border-radius: 0 0 .5rem .5rem;
  h2 {
    display: none;
  }
}
`;


const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
];

function Cart({ cartItems, removeCartItem, dispatch }) {

  const [modal, setModal] = useState(false);
  const handleCheckout = () => {
    setModal(!modal);
  };

  const handleClickDeleteFromCart = (e) => {
    const [item] = cartItems.filter((item, index) => index === parseInt(e.currentTarget.id));
    item.quantity = item.quantity - 1;
    dispatch(removeCartItem(e.currentTarget.id));
  };

  const sumOfCart = cartItems.reduce((prev,curr) => prev + parseFloat(curr.price.slice(1)), 0);

  const quntityCell = (id, quantity) => {
    return (
      <div className='quantity-cell'>
        {`X${quantity}`}
        <DeleteOutlined title='Remove' id={id} onClick={handleClickDeleteFromCart} />
      </div>
    );
  };
  
  const uniqItems = [...new Set(cartItems)];
  const dataSource = uniqItems.map((item, index) => {
    return({
      key: index,
      item: item.item_name,
      price:  '$'+(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2),
      quantity: quntityCell(index, item.quantity)
    });
  });

  return(
    <Container>
      <Row>
        <Col span={16} offset={1}>
          <TableContainer>
            <div className='cart-pg-title'><h2>Cart Items</h2></div>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{ position: ['none', 'none'] }}
              showHeader={dataSource.length === 0 ? false : true}
              footer={() => <h2>{'Total: $' + sumOfCart.toFixed(2)}</h2>}
            />
          </TableContainer>
        </Col>
        <Col span={5} offset={1}>
          <SideOfCart>
            <h2>Purchase<br/>Items</h2>
            <Button onClick={handleCheckout} type='primary' size='large'>Checkout</Button>
          </SideOfCart>
        </Col>
      </Row>
      <Modal title={'Confirm Purchase'} visible={modal} onOk={()=>{return;}} onCancel={()=>setModal(false)}>
        {cartItems.length > 0 ? <p>Confirm this purchase of items.</p> : <p style={{'textAlign':'center'}}>Cart is empty</p>}
        {uniqItems.map(item => {
          return(
            <>
              {'('+item.quantity+'x) '+item.item_name+' ~ '+item.price+' per unit.'}<br/><strong>{' total: $'+(parseFloat(item.price.slice(1))*item.quantity).toFixed(2)}</strong><br/>
            </>
          );
        })}
        {cartItems.length > 0 ? <h2 style={{'margin':'.75em 0 0'}}>Total amount: ${sumOfCart.toFixed(2)}</h2> : undefined}
      </Modal>
    </Container>
  );
}

export default Cart;
