import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Col, Badge } from 'antd';
import styled from 'styled-components';

const NavContainer = styled.nav`
display: flex;
align-items: flex-end;
width: 100%;
max-width: 1440px;
margin: 0 auto;
@media(max-width: 900px) {
  .ant-col-offset-2 {
    margin: 0;
  }
}
@media(max-width: 600px) {
  justify-content: center;
  .ant-col-offset-2 {
    display: none;
  }
  .ant-col-offset-1 {
    margin: 0;
  }
}
`;

const Container = styled.div`
.ant-menu{
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  border: none;
  width: 100%;
  .ant-menu-item-selected::after {
    right: 1em;
    left: 1em;
    border-color: rgb(var(--orange));
  }
  .ant-menu-item {
    line-height: 2;
    margin-right: 2.5rem;
    margin-left: .25rem;
    padding 0 .25rem;
    a {
      color: rgb(0,0,0);
      &:hover {
        color: rgb(var(--orange));
      }
    }
    &:hover {
      color: rgb(var(--orange));
      &.ant-menu-item-selected::after {
        border-color: rgb(var(--orange));
      }
      &::after{
        right: .8em;
        left: .8em;
        border-color: rgb(215,215,215);
        transition: right .5s, left .5s;
      }
    }
    &::after {
      transition: .5s;
    }
  }
}
`;

const CartContainer = styled.div`
display: flex;
justify-content: space-between;
line-height: 2;
.ant-badge-count {
  color: #FF6700;
  box-shadow: none;
}
.anticon-shopping-cart {
  color: rgb(var(--dark-blue));
  font-size: 2em;
}
.header-title {
  white-space: nowrap;
  font-size: 1.2rem;
}
`;

function Nav() {

  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <NavContainer>
      <Col span={15} offset={1}>
        <Container>
          <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
            <Menu.Item key={'home'}><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key={'blog'}><Link to='shop'>Shop</Link></Menu.Item>
            <Menu.Item key={'about'}>About</Menu.Item>
          </Menu>
        </Container>
      </Col>
      <Col offset={2}>
        <CartContainer>
          <h3 className='header-title'>Shop My Plants</h3>
        </CartContainer>
      </Col>
      <Col offset={1}>
        <CartContainer>
          <Badge color='#004E98' size='small' count={2}>
            <ShoppingCartOutlined />
          </Badge>
        </CartContainer>
      </Col>
    </NavContainer>
  );
}

export default Nav;
