import {JSON_FAILED, JSON_FETCHING, JSON_SUCCESS} from '../Constants';
import axios from 'axios';

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



export const loadData = ()=>{
    return async dispatch=>{
        try {
            dispatch(setJSONtoFetching())            
      
            const regUsername = 'admin';
            const regPassword = 'password';
            const data = `username=${regUsername}&password=${regPassword}&type=foods`;
            const url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
            const result = await axios.post(url, data);
      
            dispatch(setJSONtoSuccess(result.data.youtubes))
          } catch (e) {
            dispatch(setJSONtoFailed())
          }
    }
}