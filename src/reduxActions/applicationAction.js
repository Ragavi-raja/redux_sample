import * as actionvariables from '../config/ReduxActionConstants';

//New ActionConstants dispatch
export const getLoginData = () => {
  return {
    type: actionvariables.LOGIN_FETCHING_DATA,
  };
};
export const getLoginDataSuccess = data => {
  return {
    type: actionvariables.LOGIN_FETCHING_DATA_SUCCESS,
    payload: data,
  };
};
export const getLoginDataError = err => {
  return {
    type: actionvariables.LOGIN_FETCHING_DATA_ERROR,
    payload: err,
  };
};



//Functions for Forget Password
export const getForgetPasswordData = () => {
    return {
      type: actionvariables.FORGET_FETCHING_DATA,
    };
  };
  export const getForgetPasswordDataSuccess = data => {
    return {
      type: actionvariables.FORGET_FETCHING_DATA_SUCCESS,
      payload: data,
    };
  };
  export const getForgetPasswordDataError = err => {
    return {
      type: actionvariables.FORGET_FETCHING_DATA_ERROR,
      payload: err,
    };
  };
  