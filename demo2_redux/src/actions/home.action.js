import {LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS} from '../Constants';
import AsyncStorage from '@react-native-community/async-storage';

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
export const login = (account, navigation) => {
  return (dispatch) => {
    dispatch(setLoginToFetching());

    setTimeout(async () => {
      const regAccJSON = await AsyncStorage.getItem('ACCOUNT');
      if (regAccJSON) {
        const regAcc = JSON.parse(regAccJSON);

        if (
          regAcc.username == account.username &&
          regAcc.password == account.password
        ) {
          await AsyncStorage.setItem('TOKEN', account.username);
          dispatch(setLoginToSuccess(account.username));
          navigation.navigate('Success');
        } else {
          dispatch(setLoginToFailed());
        }
      }
    }, 1000);
  };
};
