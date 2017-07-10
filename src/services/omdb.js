const OMDB_ENDPOINT = 'http://www.omdbapi.com';

class OMDbService {
  async searchMovies(searchValue) {
    const url = `${OMDB_ENDPOINT}/?s=${searchValue}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`OMDbService searchMovies failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`OMDbService searchMovies failed, There was an error in the response ${data.Error}`);
    }

    const movies = data.Search;
    const sortedByTitle = movies
      .sort((a, b) => a.Title < b.Title ? -1 : a.Title > b.Title ? 1 : 0)
      .filter((movie, index) => !index || movies[index - 1].Title !== movie.Title );

    return  sortedByTitle.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      poster: movie.Poster,
    }));
  }
}

export default new OMDbService();
