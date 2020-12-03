import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';

export const setJSONtoFetching = () => ({
  type: JSON_FETCHING,
});

export const setJSONtoSuccess = (payload) => ({
  type: JSON_SUCCESS,
  payload,
});

export const setJSONtoFailed = () => ({
  type: JSON_FAILED,
});
