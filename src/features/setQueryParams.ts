interface SearchSettings {
  target: string;
  page: number;
}

export const setQueryParams = (
  searchSettings: SearchSettings,
  history: any
) => {
  let { target, page } = searchSettings;
  let query;
  if (target.length) {
    query = '/?target=' + target + '&page=' + page;
  } else {
    query = '/?page=' + page;
  }
  history.replace('/main' + `${query}`);
};
