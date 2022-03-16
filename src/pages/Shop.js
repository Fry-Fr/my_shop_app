import {  Card } from 'antd';
import styled from 'styled-components';
import shopData from '../assets/data/productData';

const MainContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: space-around;
width: 80%;
margin: 0 auto;
padding: 1.5rem;
.ant-card-bordered {
  background: rgb(var(--primary-color));
  border: 1px solid rgb(var(--secondary-color));
  border-radius: .5rem;
  transform: scale(100%);
  transition: transform .5s;
  width: 100%;
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

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 33%);
gap: .5rem;
width: 100%;
@media(max-width: 900px) {
  grid-template-columns: repeat(1, 100%);
  .ant-card-body {
    width: 70%;
    margin: 0 auto;
  }
}
`;

function Shop() {
  return (
    <MainContainer>
      <Grid>
        {shopData.map( (_) => {
          return (
            <Card key={_.id}>
              <span><h4 className='card-title'>{_.item_name}</h4></span>
              <img height={250} className='card-image' src={_.image_url} alt='gum'/>
              <span className='card-price'>Price: {_.price}</span>
              <p className='card-content'>{_.description}</p>
            </Card>
          );
        })}
      </Grid>
    </MainContainer>
  );
}

export default Shop;
