// Libs
import { Row, Col } from 'antd';
// Components
import FeaturedItems from '../components/FeaturedItems';
import SiteView from '../components/SiteView';

function Home() {
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
