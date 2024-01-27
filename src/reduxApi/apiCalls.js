import * as consts from '../config/constants';
import axios from 'axios';

import Config from 'react-native-config';

const axiosApiInstance = axios.create();
let checkforerror;

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  req => {
    const data = 'passwordChange';
    const firsturl = consts.api_url + consts.login;
    const forgeturl = consts.api_url + consts.forget_password;
    if (req.url == forgeturl) {
      if (data == req.data.action) {
        refreshAccessToken();
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + global.accessToken;
      }
    } else {
      if (req.url != firsturl && req.url != forgeturl) {
        refreshAccessToken();
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + global.accessToken;
      }
    }

    return req;
  },
  err => {
    return Promise.reject(err);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      checkforerror = true;
      refreshAccessToken(checkforerror);

      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + global.accessToken;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const refreshAccessToken = state => {
  consts.header.Authorization = global.accessToken;
  return axios
    .post(consts.api_url + consts.refresh, '{ "isIdle": false }', {
      headers: consts.header,
    })
    .then(res => {
      global.accessToken = res.data.accessToken;
      return true;
    })
    .catch(err => {
      if (state) {
        // Code to manage Error or navigation
        // ..
        // ...
        checkforerror = false;
      }
      return false;
    });
};

export const postData = (data, endpoint, pData, type) => {
  const url = consts.api_url + endpoint;
  let headerpart;
 
    consts.header.Authorization = global.accessToken;
    headerpart = consts.header;

  return axiosApiInstance
    .post(url, data, {headers: headerpart, params: pData})
    .then(response => {
      return {data: response.data};
    })
    .catch(err => {
      const error = {
        error: [],
        status: [],
      };
      if (err.response != undefined) {
        error.error = consts.server_error_text(
          err.response.status,
          err.response.data.message,
        );
        error.status = err.response.status;
      } else {
        error.error = consts.server_error_text();
      }
      return error;
    });
};



//get calls
export const getData = (endpoint, paramsdata) => {
  consts.header.Authorization = global.accessToken;

  const url = consts.api_url + endpoint;
  consts.header.Authorization = global.accessToken;

  return axiosApiInstance
    .get(url, {headers: consts.header, params: paramsdata})
    .then(response => {
      return {data: response.data};
    })
    .catch(err_data => {
      const error = {
        error: [],
        status: [],
      };
      if (err_data.response != undefined) {
        error.error = consts.server_error_text(err_data.response.status);
        error.status = err_data.response.status;
      } else {
        error.error = consts.server_error_text();
      }
      return error;
    });
};

//get calls
export const deleteData = (endpoint, paramsdata) => {
  consts.header.Authorization = global.accessToken;
  const url = consts.api_url + endpoint;
  consts.header.Authorization = global.accessToken;

  return axiosApiInstance
    .delete(url, {headers: consts.header, params: paramsdata})
    .then(response => {
      return {data: response.data};
    })
    .catch(err_delete => {
      const error = {
        error: [],
        status: [],
      };
      if (err_delete.response != undefined) {
        error.error = consts.server_error_text(err_delete.response.status);
        error.status = err_delete.response.status;
      } else {
        error.error = consts.server_error_text();
      }
      return error;
    });
};

//patch calls
export const patchData = (data, endpoint, pData) => {
  const url = consts.api_url + endpoint;

  consts.header.Authorization = global.accessToken;

  return axiosApiInstance
    .patch(url, data, {headers: consts.header})
    .then(response => {
      return {data: response.data};
    })
    .catch(err => {
      const error = {
        error: [],
        status: [],
      };
      if (err.response != undefined) {
        error.error = consts.server_error_text(err.response.status);
        error.status = err.response.status;
      } else {
        error.error = consts.server_error_text();
      }
      return error;
    });
};

//put calls

export const putData = (data, endpoint, pData) => {
  const url = consts.api_url + endpoint;

  consts.header.Authorization = global.accessToken;

  return axiosApiInstance
    .put(url, data, {headers: consts.header})
    .then(response => {
      return {data: response.data};
    })
    .catch(err => {
      const error = {
        error: [],
        status: [],
      };
      if (err.response != undefined) {
        error.error = consts.server_error_text(err.response.status);
        error.status = err.response.status;
      } else {
        error.error = consts.server_error_text();
      }
      return error;
    });
};




