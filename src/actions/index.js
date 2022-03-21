//constants
export const CUR_NAV_TAB = 'CUR_NAV_TAB';
export const CART = 'CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
//action functions
export function curNavTab(string) {
  return({ type: CUR_NAV_TAB, payload: string });
}
export function setCart(itemObj) {
  itemObj.quantity = itemObj.quantity + 1;
  return({ type: CART, payload: itemObj });
}
export function removeCartItem(id) {
  return({ type: REMOVE_CART_ITEM, payload: parseInt(id) });
}