import * as consts from '../config/constants';
import * as setActions from '../reduxActions/SocketActions';
import {getConversation} from '../reduxApi/RequestCalls';
import socketClient from '../socketConnections/SocketClient';
const socket = socketClient();

export const connect = () => {
  return async dispatch => {
    socket.on(consts.connect, data => {
      var result = 'Success';
      dispatch(setActions.connectSocket(result));
    });
    socket.on(consts.disconnect, data => {
      console.log('disconnect---->');
      dispatch(setActions.disconnect());
    });
    socket.on(consts.connection, err => {
      dispatch(setActions.connectSocketError(err));
    });
    socket.on(consts.error, err => {
      dispatch(setActions.connectSocketErrorResponse(err));
    });
    socket.on(consts.initial_message, data => {
      dispatch(setActions.initMessage(data));
    });
    socket.on(consts.receiveMessage, data => {
      dispatch(setActions.receive(data));
      dispatch(getConversation());
    });
    socket.on(consts.disconnect_patient, data => {
      dispatch(setActions.videoDisconnect(data));
    });
    socket.on(consts.subscribe_to_message, data => {
      dispatch(setActions.subscribe(data));
    });
    socket.on(consts.initial_message, data => {
      dispatch(setActions.readMessage(data));
    });
    socket.on(consts.connect_patient, data => {
      dispatch(setActions.videoConnect(data));
    });
  };
};

export const disconnectSocket = () => {
  return async dispatch => {
    socket.disconnect();
    dispatch(setActions.disconnect());
  };
};

export const initMessage = id => {
  return async dispatch => {
    socket.emit(consts.init_message, {room: id});
  };
};
export const subscribe = id => {
  return async dispatch => {
    socket.emit(consts.subscribe, {room: id});
  };
};
export const unsubscribe = ids => {
  return async dispatch => {
    socket.emit(consts.unsubscribe, {room: ids});
    dispatch(setActions.unsubscribe('unsubscribed'));
  };
};

export const sendMessage = (type, id, messages) => {
  return async dispatch => {
    //type 1 = Message type 2 = File
    if (type == 'msg') {
      socket.emit(consts.send_message, {
        room: id,
        message: messages,
      });
    }
    if (type == 'file') {
      socket.emit(consts.send_file, {
        rooms: [id],
        message: 'file',
        attachments: messages,
      });
    }
  };
};
export const readMessages = id => {
  return async dispatch => {
    socket.emit(consts.read_message, {room: id});
  };
};
export const connectVideo = (user, sessionid) => {
  return async dispatch => {
    socket.emit(consts.connect_patient, {
      data: {
        currentUserId: user,
        sessionId: sessionid,
      },
    });
  };
};

export const disconnectVideo = (user, sessionid) => {
  return async dispatch => {
    socket.emit(consts.disconnect_patient, {
      data: {
        currentUserId: user,
        sessionId: sessionid,
      },
    });
  };
};
