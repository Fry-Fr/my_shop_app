import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import styled from 'styled-components';
import shopData from '../assets/data/productData';

const MainContainer = styled.div`
img {
  border-radius: 1rem;
  width: 100%;
  max-height: 140mm;
}
.ant-card {
  background-color: rgb(var(--primary-color));
  border-radius: .75rem;
  width: 50%;
  margin: 0 auto 1rem;
  .ant-card-body {
    padding: 1rem;
  }
  .item-description {
    text-align: left;
    border-top: 1px solid black;
    padding: 1rem 1rem 0;
  }
  .item-details {
    display: flex;
    justify-content: space-evenly;
    padding: .5rem 0;
    .item-price {
      font-weight: bold;
    }
    .item-name {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
`;

// eslint-disable-next-line react/prop-types
function Item({ dispatch, setCart }) {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setItem(shopData.filter( itemObj => itemObj.id === parseInt(id)));
  },[]);

  const handleAddToCart = () => {
    const [itemObj] = item;
    dispatch(setCart(itemObj));
  };

  return (
    <MainContainer>
      {item.map((_) => {
        return (
          <Card key={_.id}>
            <img src={_.image_url} alt='' />
            <div className='item-details'>
              <span className='item-name'>{_.item_name}</span>
              <span className='item-price'>price: {_.price}</span>
            </div>
            <p className='item-description'>{_.description}</p>
            <button onClick={handleAddToCart}>add to cart</button>
          </Card>
        );
      })}
    </MainContainer>
  );
}

export default Item;
