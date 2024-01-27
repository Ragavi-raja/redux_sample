import * as endpoints from '../config/constants';
import {
  postData,  
  getData,
  deleteData, 
  patchData,
  putData,
} from './Apicalls';
import * as setActions from '../reduxActions/ApplicationActions';

//Functions for login
export const loginapicall = data => {
  const endpoint = endpoints.login;
  return async dispatch => {
    dispatch(setActions.getLoginData());
    const response = postData(data, endpoint);
    response.then(val => {
      if (val.data != undefined) {
        dispatch(setActions.getLoginDataSuccess(val.data));
      } else {
        dispatch(setActions.getLoginDataError(val));
      }
    });
  };
};



//Edit exercise
export const editExerciseCall = (data, id) => {
  const endpoint = endpoints.log_physical + '/' + id;

  return async dispatch => {
    await dispatch(setActions.editExercise());
    const response = patchData(data, endpoint);
    await response.then(val => {
      if (val.data != undefined) {
        dispatch(setActions.editExerciseSuccess(val.data));
      } else {
        dispatch(setActions.editExerciseError(val));
      }
    });
  };
};

//Functions for delete Physical data
export const deletePhysicalData = data => {
  const endpoint = endpoints.log_physical + '/' + data;
  return async dispatch => {
    dispatch(setActions.deleteLogPhysicalPostData());
    const response = deleteData(endpoint);
    response.then(val => {
      if (val.data != undefined) {
        dispatch(setActions.deleteLogPhysicalPostDataSuccess(val.data));
      } else {
        dispatch(setActions.deleteLogPhysicalPostDataError(val.error));
      }
    });
  };
};
