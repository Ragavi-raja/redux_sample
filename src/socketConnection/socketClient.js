import io from 'socket.io-client';
import * as consts from '../config/constants';

const socketClient = () => {
  return io(consts.socket_url, {
    forceNew: true,
    extraHeaders: {
      Authorization: 'Bearer ' + global.accessToken,
    },
    query: {
      isLogin: false,
    },
  });
};
export default socketClient;
