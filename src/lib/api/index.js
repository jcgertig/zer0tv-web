import { generateRequest } from 'fetchum-redux';

export default {
  typeahead: generateRequest({
    method: 'GET',
    route: '/v1/typeahead',
  }, 'TYPEAHEAD'),
  search: generateRequest({
    method: 'GET',
    route: '/v1/search',
  }, 'SEARCH'),
};
