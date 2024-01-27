import * as actionvariables from '../config/socketActionConstants';
export const connectSocket = data => {
  return {
    type: actionvariables.SOCKET_CONNECT,
    payload: data,
  };
};
export const connectSocketError = data => {
  return {
    type: actionvariables.SOCKET_CONNECTION,
    payload: data,
  };
};
export const connectSocketErrorResponse = data => {
  return {
    type: actionvariables.SOCKET_ERROR,
    payload: data,
  };
};

export const disconnect = data => {
  return {
    type: actionvariables.SOCKET_DISCONNECT,
    payload: data,
  };
};

export const subscribe = data => {
  return {
    type: actionvariables.SOCKET_SUBSCRIBE,
    payload: data,
  };
};
export const unsubscribe = data => {
  return {
    type: actionvariables.SOCKET_UNSUBSCRIBE,
    payload: data,
  };
};

export const initMessage = data => {
  return {
    type: actionvariables.SOCKET_INITIAL_MESSAGES,
    payload: data,
  };
};

export const receive = data => {
  return {
    type: actionvariables.SOCKET_RECEIVE_MESSAGE,
    payload: data,
  };
};
export const receiveerror = data => {
  return {
    type: actionvariables.SOCKET_RECEIVE_MESSAGE_ERROR,
    payload: data,
  };
};
export const receiveclear = data => {
  return {
    type: actionvariables.SOCKET_RECEIVE_MESSAGE_CLEAR,
    payload: data,
  };
};

export const readMessage = data => {
  return {
    type: actionvariables.SOCKET_READ_MESSAGES,
    payload: data,
  };
};

export const videoConnect = data => {
  return {
    type: actionvariables.SOCKET_VIDEOCALL_PATIENT_CONNECTED,
    payload: data,
  };
};

export const videoDisconnect = data => {
  return {
    type: actionvariables.SOCKET_VIDEOCALL_PATIENT_DISCONNECTED,
    payload: data,
  };
};
