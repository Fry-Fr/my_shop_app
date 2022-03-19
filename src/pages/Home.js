// Libs
import { useEffect } from 'react';
import { Row, Col } from 'antd';
// Components
import FeaturedItems from '../components/FeaturedItems';
import SectionCart from '../components/SectionCart';

// eslint-disable-next-line react/prop-types
function Home({ dispatch, curNavTab, cart, removeCartItem }) {
  useEffect(() => {
    dispatch(curNavTab('home'));
  },[]);

  return (
    <Row>
      <Col span={16} offset={1}>
        <FeaturedItems/>
      </Col>
      <Col span={5} offset={1}>
        <SectionCart cart={cart} removeCartItem={removeCartItem} dispatch={dispatch} />
      </Col>
    </Row>
  );
}

export default Home;
