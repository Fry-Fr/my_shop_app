// Libs
import { Space, Card } from 'antd';
import styled from 'styled-components';

const Container = styled.section`
background: rgba(var(--primary-color), .4);
border-radius: .5rem;
box-shadow: 0mm 0mm 1mm rgba(var(--dark-blue), .5);
padding:  1rem;
h2 {
  color: rgb(var(--primary-color));
  margin: 0;
}
.ant-space-vertical {
  width: 100%;
  filter: drop-shadow(0mm 0mm .5mm rgb(var(--dark-blue)));
}
.ant-card {
  cursor: pointer;
  border-radius: .2rem;
  transition: .5s;
  margin: 0 auto;
  width: 90%;
  .ant-card-body {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 .5rem;
  }
  .ant-card-body a {
    white-space: nowrap;
    color: black;
  }
  &:hover {
    background-color: rgba(var(--orange), .7);
    width: 100%;
    transition: .5s;
  }
}
`;

function SiteView() {
  return (
    <Container>
      <h2>Sites</h2>
      <Space direction='vertical'>
        <Card><a href='http://ryans-website.vercel.app'>http://ryans-website.vercel.app</a></Card>
      </Space>
    </Container>
  );
}

export default SiteView;
