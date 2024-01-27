import userDetails from '@reducers_LoginReducers';
import patientDetails from '@reducers_PatientDetailsReducers';
import forgetPasswordDetails from '@reducers_ForgetPasswordReducers';


import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const rootreducer = combineReducers({
    userDetails: userDetails,
    patientDetails: patientDetails,
    forgetPasswordDetails: forgetPasswordDetails,
});

    const configureStore = () => {
      return createStore(rootreducer, applyMiddleware(thunk, createLogger));
    };
    export default configureStore;