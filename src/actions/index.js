export const CUR_NAV_TAB = 'CUR_NAV_TAB';

export function curNavTab(string) {
  return({ type: CUR_NAV_TAB, payload: string});
}
