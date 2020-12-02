import {LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS} from '../Constants';

// Code to be called by reducers
export const setLoginToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginToFailed = () => ({
  type: LOGIN_FAILED,
});

export const setLoginToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

// Code to be called by UI component
export const login = (account) => {
  return (dispatch) => {
    dispatch(setLoginToFetching());

    setTimeout(() => {
      dispatch(setLoginToSuccess('admin'));
    }, 1000);
  };
};
