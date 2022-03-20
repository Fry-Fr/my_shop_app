/* eslint-disable react/prop-types */
import { Col, Table } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
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

function Cart({ cartItems }) {

  const sumOfCart = cartItems.reduce((prev,curr) => prev + parseFloat(curr.price.slice(1)), 0);
  
  const dataSource = cartItems.map((item, index) => {
    return({
      key: index,
      item: item.item_name,
      price: item.price,
      quantity: ''
    });
  });

  return(
    <Col span={16} offset={4}>
      <Container>
        <div className='cart-pg-title'><h2>Cart Items</h2></div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ position: ['none', 'none'] }}
          showHeader={dataSource.length === 0 ? false : true}
          footer={() => 'Total: $' + sumOfCart.toFixed(2)}
        />
      </Container>
    </Col>
  );
}

export default Cart;
