// Libraries
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
// Components
import Nav from './components/Nav';
// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';

const { Header,Content,Footer } = Layout;

const Container = styled.div`
display: flex;
margin: 0 auto;
flex-direction: column;
min-height: 100vh;
.ant-layout-content{
  text-align: center;
  flex: 1;
  padding-top: 1rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.ant-layout-header{
  display: flex;
  align-items: flex-end;
  background: rgba(var(--primary-color), .5);
  border-bottom: 1px solid rgb(var(--secondary-color));
  padding: 0 0 .25rem;
}
.ant-layout-footer{
  text-align: center;
  background: rgba(var(--primary-color), .3);
  border-top: 1px solid rgb(var(--secondary-color));
  padding: 0;
  span {
    color: rgb(var(--orange));
  }
}
`;

const FooterContainer = styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
`;

function App() {
  const [current, setCurrent] = useState('');
  return(
    <Container>
      <Header>
        <Nav current={current} setCurrent={setCurrent} />
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home setCurrent={setCurrent} />} />
          <Route path='shop' element={<Shop setCurrent={setCurrent} />} />
        </Routes>
      </Content>
      <Footer>
        <FooterContainer>
          Footer
          <span>√</span>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

export default App;
