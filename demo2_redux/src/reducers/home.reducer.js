import {LOGIN_FAILED, LOGIN_FETCHING, LOGIN_SUCCESS} from '../Constants';

const initialState = {
  onlineUsername: "leklek",
  isFetching: false,
  isFailed: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        onlineUsername: null,
        isFetching: true,
        isFailed: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        onlineUsername: payload,
        isFetching: false,
        isFailed: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        onlineUsername: null,
        isFetching: false,
        isFailed: true,
      };

    default:
      return state;
  }
};
