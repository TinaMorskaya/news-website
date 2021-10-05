export const getURL = (key: string, page = 1) => {
  let urlStart = 'https://newsapi.org/v2/top-headlines?';
  if (key && key.length) {
    urlStart += `q=${key}&`;
  } else {
    urlStart += 'country=us&';
  }
  let url = urlStart + 'pageSize=10&' + `page=${page}`;
  return url;
};
