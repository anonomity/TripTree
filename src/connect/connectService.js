import {config} from '../config';
import {createUrl} from "./requestTools";

const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
const apiUrlRequest = config.apiUrl;

const fetchTemplate = (urlDomain, method, paramsData) => {
  let url = urlDomain;
  let requestSettings = {
    'method': method,
    'credentials': 'include', //If something not works, comment it.....
    'headers': {
      'Content-type': 'application/json'
    }
  };
  if(paramsData !== undefined){
    if(method === httpMethods.GET)
      url = createUrl(urlDomain, paramsData);
    else if (method === httpMethods.POST)
      requestSettings.body = JSON.stringify(paramsData);
  }
  console.log(requestSettings);
  return fetch(url, requestSettings).then(response => {
    console.log(response)
    if (response.status >= 200 && response.status < 300) {
      const contentType = response.headers.get('Content-Type');
      let result = !!contentType && contentType.includes('application/json') ? response.json() : null;
      return result;
    } else {
      let error = new Error(response.statusText || response.status);
      error.response = response;
      return Promise.reject(error);
    }
  });
}

export const login = (username, password) => {
  const params = {
    username: username,
    password: password
  };
  const url = `${apiUrlRequest}/login`;
  return fetchTemplate(url, httpMethods.POST, params);
}

export const fetchGreeting = () => {
  const params = {
    name: 'Dawid'
  };
  const url = `${apiUrlRequest}/greeting`;
  return fetchTemplate(url, httpMethods.GET, params);
}

export const fetchProfile = () => {
  const url = `${apiUrlRequest}/profile`;
  return fetchTemplate(url, httpMethods.GET)
}

export const fetchConferences = () => {
  const url = `${apiUrlRequest}/conferences`;
  return fetchTemplate(url, httpMethods.GET)
}

export const fetchSingleConference = conferenceId => {
  const url = `${apiUrlRequest}/conferences/${conferenceId}`;
  return fetchTemplate(url, httpMethods.GET)
}
export const addSingleConference = conferenceId => {
  const url = `${apiUrlRequest}/conferences/${conferenceId}`;
  return fetchTemplate(url, httpMethods.POST)
}
export const updateSingleConference = conferenceId => {
  const url = `${apiUrlRequest}/conferences/${conferenceId}`;
  return fetchTemplate(url, httpMethods.PUT)
}
export const deleteSingleConference = conferenceId => {
  const url = `${apiUrlRequest}/conferences/${conferenceId}`;
  return fetchTemplate(url, httpMethods.DELETE)
}

export const fetchArticles = () => {
  const url = `${apiUrlRequest}/articles`;
  return fetchTemplate(url, httpMethods.GET)
}
