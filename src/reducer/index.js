import { CUR_NAV_TAB, CART, REMOVE_CART_ITEM } from '../actions';

export const initialState = {
  currNavTabPage: '',
  cart: []
};

const reducer =(state, action) => {
  switch(action.type) {
  case(CUR_NAV_TAB):
    return({
      ...state,
      currNavTabPage: action.payload
    });
  case(CART):
    return({
      ...state,
      cart: [...state.cart, action.payload]
    });
  case(REMOVE_CART_ITEM):
    return({
      ...state,
      cart: state.cart.filter((item, index) => index !== action.payload)
    });
  }
  console.log('reducerAll ', state.cart);
};

export default reducer;
