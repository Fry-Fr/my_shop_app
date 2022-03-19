import { CUR_NAV_TAB } from '../actions';

export const initialState = {
  currNavTabPage: ''
};

const reducer =(state, action) => {
  switch(action.type) {
  case(CUR_NAV_TAB):
    return({
      ...state,
      currNavTabPage: action.payload
    });
  }
};

export default reducer;
