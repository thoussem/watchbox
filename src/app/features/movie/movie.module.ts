import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MovieMainComponent } from './movie-main/movie-main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MovieRoutingModule
  ],
  declarations: [MovieCardComponent, MovieListComponent, MovieMainComponent]
})
export class MovieModule { }
