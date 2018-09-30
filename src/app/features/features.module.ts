import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModule } from './movie/movie.module';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MovieModule,
    FeaturesRoutingModule,
  ],
  declarations: [],
  exports: [
    MovieModule
  ]
})
export class FeaturesModule { }
