import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shopData from '../assets/data/productData';
import styled from 'styled-components';

const MainContainer = styled.div`
img {
  width: 50%;
}
`;

function Item() {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setItem(shopData.filter( itemObj => itemObj.id === parseInt(id)));
  },[]);

  return (
    <MainContainer>
      {item.map((_) => {
        return (
          <div key={_.id}>
            <img src={_.image_url} alt='' />
          </div>
        );
      })}
    </MainContainer>
  );
}

export default Item;
