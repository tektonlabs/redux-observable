import { Record } from 'immutable';

const Movie = Record({
  id: null,
  title: 'Untitled',
  type: '',
  year: '',
  poster: '',
  watched: false,
});

export default Movie;
