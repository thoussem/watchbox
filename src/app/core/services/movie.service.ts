import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

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

  getPopularMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${MOVIE_API_URL}/popular?api_key=${API_KEY}`);
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${MOVIE_API_URL}/upcoming?api_key=${API_KEY}`);
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${MOVIE_API_URL}/top_rated?api_key=${API_KEY}`);
  }

  getNowPlayingdMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${MOVIE_API_URL}/now_playing?api_key=${API_KEY}`);
  }

  getLatestMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${MOVIE_API_URL}/latest?api_key=${API_KEY}`);
  }

}
