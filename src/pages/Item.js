import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shopData from '../assets/data/productData';
import styled from 'styled-components';

const MainContainer = styled.div`
img {
  width: 50%;
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
    dispatch(setCart(item));
  };

  return (
    <MainContainer>
      {item.map((_) => {
        return (
          <div key={_.id}>
            <img src={_.image_url} alt='' />
            <button onClick={handleAddToCart}>add to cart</button>
          </div>
        );
      })}
    </MainContainer>
  );
}

export default Item;
