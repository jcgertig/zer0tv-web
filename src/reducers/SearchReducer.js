import defaultState from '../lib/store/default';
import { SET_SEARCH_RESULTS } from '../actions/SearchActions';

export default function search(state = defaultState.search, { type, payload }) {
  switch (type) {
    case SET_SEARCH_RESULTS:
      return payload;
    default:
      return state;
  }
}
