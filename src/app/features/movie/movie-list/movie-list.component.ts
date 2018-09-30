import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { MovieFilter } from '../../../core/models/movie-filter.enum';
import { MovieService } from '../../../core/services/movie.service';
import { Observable } from 'rxjs';
import { Movie, MoviePage } from '../../../core/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList$: Observable<MoviePage>;

  constructor(private activeRoute: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.movieList$ = this.activeRoute.paramMap.pipe(
      map(params => params.get('filter')),
      switchMap(filter => this.movieService.getMoviesBy(filter)),
      tap(movies => console.log(movies))
    );
  }

}
