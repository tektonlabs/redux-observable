import Immutable from 'immutable';

const MovieRecord = Immutable.Record({
  id: null,
  title: '',
  watched: false,
});

class Movie extends MovieRecord {
  getTitle = () => this.get('title') || 'Untitled';
  isWatched = () => this.get('watched');
}

export default Movie;
