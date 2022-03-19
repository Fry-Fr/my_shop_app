import { CUR_NAV_TAB, CART } from '../actions';

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
  }
};

export default reducer;
