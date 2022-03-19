export const CUR_NAV_TAB = 'CUR_NAV_TAB';
export const CART = 'CART';

export function curNavTab(string) {
  return({ type: CUR_NAV_TAB, payload: string });
}
export function setCart(itemObj) {
  return({ type: CART, payload: itemObj });
}
