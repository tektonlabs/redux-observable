import React, { PureComponent, PropTypes } from 'react';
import './styles.css';
import noPosterAvailable from './assets/no-poster-available.png';

class MovieCardPoster extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  state = {
    poster: this.props.poster,
  };

  onPosterError = () => {
    this.setState({
      poster: noPosterAvailable,
    });
  };

  render() {
    const {
      alt,
    } = this.props;

    const {
      poster,
    } = this.state;

    return (
      <div className="movie-card-image-wrapper">
        <img
          src={poster}
          className="movie-card-image"
          alt={alt}
          onError={this.onPosterError}
        />
      </div>
    );
  }
}

export default MovieCardPoster;
