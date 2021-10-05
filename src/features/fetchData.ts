export { getListNews };
export interface Element {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
}

async function getListNews(url: string, token: string) {
  const headers = new Headers();
  const tokenAPI: string = '&apiKey=' + token;
  url = url + tokenAPI;
  try {
    let articlesBlock: Array<object> = [];
    let lastPageNum = 0;
    return fetch(url, { headers })
      .then((response) => {
        try {
          return response.json();
        } catch (error) {
          alert('Sorry, something went wrong...');
        }
      })
      .then((data) => {
        lastPageNum = Math.ceil(data.totalResults / 10);
        try {
          data.articles.forEach((el: Element) => {
            if (el) {
              let article: Element = {
                author: el.author,
                title: el.title,
                description: el.description,
                urlToImage: el.urlToImage,
                publishedAt: el.publishedAt,
                content: el.content,
                url: el.url,
              };
              articlesBlock.push(article);
            }
          });
          const totalCount: number = data.totalResults;
          const result = { articlesBlock, lastPageNum, totalCount };
          return result && result;
        } catch (error) {
          alert('Sorry, nothing was found or Your token is invalid');
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.log(error);
  }
}
