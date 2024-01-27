import * as actionvariables from '@config_socketActionConstants';
const initialState = {
  connected: undefined,
  disconnect: undefined,
  isFetching: false,
  error: false,
};
const ConnectionReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionvariables.LOGOUT:
      return {
        ...state,
        connected: undefined,
        disconnect: undefined,
        isFetching: false,
        error: false,
      };

    case actionvariables.SOCKET_ERROR:
      return {
        ...state,
        connected: action.payload,
        disconnect: false,
        isFetching: false,
        error: true,
      };
    case actionvariables.SOCKET_CONNECT:
    case actionvariables.SOCKET_CONNECTION:
      return {
        ...state,
        connected: action.payload,
        disconnect: false,
        isFetching: false,
        error: false,
      };
    case actionvariables.SOCKET_DISCONNECT:
      return {
        ...state,
        connected: action.payload,
        disconnect: true,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};
export default ConnectionReducers;
