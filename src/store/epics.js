import { combineEpics } from 'redux-observable';
import { epic as filterEpic } from 'modules/Filter';
import { epic as searchResultsEpic } from 'modules/SearchResults';

const epics = combineEpics(
  filterEpic,
  searchResultsEpic
);

export default epics;
