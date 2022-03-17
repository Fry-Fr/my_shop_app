// Libs
import { useNavigate } from 'react-router-dom';
import { Space, Card } from 'antd';
import styled from 'styled-components';

// Data
import dataProducts from '../assets/data/productData';

const Container = styled.section`
background: rgba(var(--primary-color), .4);
border-radius: .5rem;
box-shadow: 0mm 0mm 1mm rgba(var(--dark-blue), .5);
padding:  1rem 2rem 2rem;
h2 {
  color: rgb(var(--primary-color))
}
.ant-space {
  justify-content: space-evenly;
  align-items: baseline;
  flex-wrap: wrap;
  width: 100%;
  filter: drop-shadow(-.1mm -.1mm .5mm rgba(var(--dark-blue), .5));
}
.ant-space-item {
  min-width: 200px;
  max-width: 200px;
}
.ant-card-bordered {
  background: rgb(var(--primary-color));
  border: 1px solid rgb(var(--secondary-color));
  border-radius: .5rem;
  transform: scale(100%);
  transition: transform .5s;
  &:hover {
    background: #fff;
    cursor: pointer;
    transform: scale(104%) translate(.2em,-.1em);
    transition: .5s;
  }
}
.ant-card-body {
  display: flex;
  flex-direction: column;
  padding: .75rem;
}
.card-title {
  text-align: center;
  text-decoration: underline;
  font-size: 1rem;
  margin-bottom: 0;
}
.card-price {
  font-weight: bold;
}
.card-content {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  margin: 0;
  text-indent: 1rem;
}
`;

function FeaturedItems() {

  const navigate = useNavigate();

  const handleItemClick = (e) => {
    navigate(`shop/${e.currentTarget.id}`);
  };

  return (
    <Container>
      <h2>Featured Items</h2>
      <Space direction='horizontal'>
        {dataProducts.map((_) => {
          return (
            <Card id={_.id} key={_.id} onClick={handleItemClick} >
              <span><h4 className='card-title'>{_.item_name}</h4></span>
              <img src={_.image_url} alt='gum'/>
              <span className='card-price'>Price: {_.price}</span>
              <p className='card-content'>{_.description}</p>
            </Card>
          );
        })}
      </Space>
    </Container>
  );
}

export default FeaturedItems;
