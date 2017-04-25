import React, { PureComponent, PropTypes } from 'react';
import Movie from 'models/Movie';
import './styles.css';
import noPosterAvailable from './assets/no-poster-available.png';

class MovieCard extends PureComponent {
  static propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
  };

  state = {
    poster: this.props.movie.get('poster'),
  };

  onPosterError = () => {
    this.setState({
      poster: noPosterAvailable,
    });
  };

  render() {
    const {
      movie,
    } = this.props;
    console.log(movie);
    const {
      poster,
    } = this.state;

    const isWatched = movie.get('watched');

    return (
      <div className={`moviecard ${isWatched ? 'is-watched' : ''}`}>
        <div className="moviecardImageWrapper">
          <img
            src={poster}
            className="moviecardImage"
            alt={`${movie.title} Poster`}
            onError={this.onPosterError}
          />
        </div>
        <div className="moviecardInfo">
          <p className="moviecardTitle">
            Title: {movie.get('title')}
          </p>
          <div className="moviecardDetails">
            <p className="moviecardType">
              Type: {movie.get('type')}
            </p>
            <p className="moviecardYear">
              Year: {movie.get('year')}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
