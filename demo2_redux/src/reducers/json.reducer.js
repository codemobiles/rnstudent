import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';

const initialState = {
  dataArray: [],
  isRefreshing: false,
  isFailed: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case JSON_FETCHING:
      return {...state, dataArray: [], isRefreshing: true, isFailed: false};
    case JSON_SUCCESS:
      return {
        ...state,
        dataArray: payload,
        isRefreshing: false,
        isFailed: false,
      };
    case JSON_FAILED:
      return {...state, dataArray: [], isRefreshing: false, isFailed: true};
    default:
      return state;
  }
};
