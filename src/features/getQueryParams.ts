const getParams = (pageQuery: any) => {
  return {
    targetURL: pageQuery.get('target') || '',
    pageURL: Number.parseInt(pageQuery.get('page') || 1),
  };
};

export const getQueryParams = (location: any) => {
  const data = new URLSearchParams(location.search);
  let params = getParams(data);
  return params;
};
