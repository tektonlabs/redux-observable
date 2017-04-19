import { routerReducer } from 'react-router-redux'
import searchResults from 'modules/SearchResults';
import movies from 'modules/Movies';

const reducers = {
  router: routerReducer,
  searchResults,
  movies,
};

export default reducers;
