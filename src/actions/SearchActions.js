import createAction from '../lib/utils/createAction';
import Api from '../lib/api';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const setSearchResults = createAction(SET_SEARCH_RESULTS);

export function searchForStreams(query) {
  return (dispatch) => {
    dispatch(Api.search({}, { query }))
    .then(res => dispatch(setSearchResults(res.data[0])))
    .catch(() => dispatch(setSearchResults({})));
  };
}
