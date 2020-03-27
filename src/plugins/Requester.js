const UrlBase = 'https://reqres.in/api/';

const getAll = async (url, params, method = 'GET') => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (params) {
    method === 'GET' ?
    url += '?' + objectToQueryString(params)
    :
    options.body = JSON.stringify(params)
  }

  const response = await fetch(UrlBase + url, options);
  const result = await response.json();

  return result;

}

const objectToQueryString = obj => Object.keys(obj).map(key => key + '=' + obj[key]).join('&');

export default getAll;