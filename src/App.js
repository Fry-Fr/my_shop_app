// Libraries
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
// Components
import Nav from './components/Nav';
// State
import reducer, { initialState } from './reducer';
import { curNavTab, setCart, removeCartItem } from './actions';
// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Item from './pages/Item';

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
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <Container>
      <Header>
        <Nav currentTab={state.currNavTabPage} cartItems={state.cart} />
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home removeCartItem={removeCartItem} curNavTab={curNavTab} dispatch={dispatch} cart={state.cart} />} />
          <Route path='shop' element={<Shop curNavTab={curNavTab} dispatch={dispatch} />} />
          <Route path='shop/:id' element={<Item setCart={setCart} dispatch={dispatch} />} />
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
