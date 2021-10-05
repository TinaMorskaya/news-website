export const getLink = (
  symbol: number | string,
  curPage: number,
  lastPage: number,
  curTarget: string
) => {
  switch (symbol) {
    case '<':
      return curPage === 1
        ? null
        : '/main/?target=' + curTarget + '&page=' + (curPage - 1);
    case '>':
      return curPage === lastPage
        ? null
        : '/main/?target=' + curTarget + '&page=' + (curPage + 1);
    case curPage:
      return null;
    case '…':
      return null;
    default:
      return '/main/?target=' + curTarget + '&page=' + symbol;
  }
};
