import { combineEpics } from 'redux-observable';
import { epic as activeFilterEpic } from 'modules/ActiveFilter';
import { epic as searchResultsEpic } from 'modules/SearchResults';

const epics = combineEpics(
  activeFilterEpic,
  searchResultsEpic
);

export default epics;
