// Libs
import { useEffect } from 'react';
import { Row, Col } from 'antd';
// Components
import FeaturedItems from '../components/FeaturedItems';
import SiteView from '../components/SiteView';

// eslint-disable-next-line react/prop-types
function Home({ setCurrent }) {
  useEffect(() => {
    setCurrent('home');
  },[]);

  return (
    <Row>
      <Col span={13} offset={2}>
        <FeaturedItems/>
      </Col>
      <Col span={6} offset={1}>
        <SiteView/>
      </Col>
    </Row>
  );
}

export default Home;
