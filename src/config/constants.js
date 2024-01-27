import Config from 'react-native-config';

export const header = {
    'Content-Type': 'application/json',
    'x-api-token': Config.X_API_TOKEN,
  };
export const base_url = Config.BASE_URL;
export const socket_url = Config.SOCKET_URL;
export const api_url = base_url + 'api/';



//Api end Points
export const login = 'authentication';
export const change_password = 'change-password';
export const forget_password = 'authmanagement';
export const log_physical = 'exercise-logs';



//request methods
export const post = 'post';
export const get = 'get';
export const put = 'put';


export const server_error_text = (code, message) => {
    switch (code) {
      case 500:
        return 'Internal Server Error';
      case 501:
        return ' Not Implemented';
      case 502:
        return 'Bad Gateway';
      case 503:
        return 'Service Unavailable';
      case 404:
        return 'Page not Found';
      case 400:
        if (message != undefined) {
          return message;
        } else {
          return 'Incorrect email or password, try again.';
        }
      case 403:
        return 'Invalid User';
      case 401:
        return 'Refresh API call';
      default:
        return 'Error.Something Went Wrong';
    }
  };