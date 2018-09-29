import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModule } from './movie/movie.module';

@NgModule({
  imports: [
    CommonModule,
    MovieModule
  ],
  declarations: [],
  exports: [
    MovieModule
  ]
})
export class FeaturesModule { }
