export const createUrl = (path, params) => {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return path + '?' + queryString;
}