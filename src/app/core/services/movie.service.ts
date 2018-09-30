import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Movie, MoviePage } from '../models/movie.model';
import { Observable } from 'rxjs';
import { MovieFilter } from '../models/movie-filter.enum';

const MOVIE_API_URL = environment.movieDbApiURL + '/movie';
const API_KEY = environment.movieDbApiKey;
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this._http.get<Movie>(`${MOVIE_API_URL}/${id}?api_key=${API_KEY}`);
  }

  getMoviesBy(filter: string): Observable<MoviePage> {
    switch (filter) {
      case MovieFilter.POPULAR:
        return this.getPopularMovies();
      case MovieFilter.TOP_RATED:
        return this.getTopRatedMovies();
      case MovieFilter.NOW_PALYING:
        return this.getNowPlayingdMovies();
      case MovieFilter.UPCOMING:
        return this.getUpcomingMovies();
      case MovieFilter.LATEST:
        return this.getLatestMovies();
      default:
        return this.getPopularMovies();
    }
  }

  getPopularMovies(): Observable<MoviePage> {
    return this._http.get<MoviePage>(`${MOVIE_API_URL}/popular?api_key=${API_KEY}`);
  }

  getUpcomingMovies(): Observable<MoviePage> {
    return this._http.get<MoviePage>(`${MOVIE_API_URL}/upcoming?api_key=${API_KEY}`);
  }

  getTopRatedMovies(): Observable<MoviePage> {
    return this._http.get<MoviePage>(`${MOVIE_API_URL}/top_rated?api_key=${API_KEY}`);
  }

  getNowPlayingdMovies(): Observable<MoviePage> {
    return this._http.get<MoviePage>(`${MOVIE_API_URL}/now_playing?api_key=${API_KEY}`);
  }

  getLatestMovies(): Observable<MoviePage> {
    return this._http.get<MoviePage>(`${MOVIE_API_URL}/latest?api_key=${API_KEY}`);
  }

}
