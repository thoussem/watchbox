import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieMainComponent } from './movie-main/movie-main.component';

const routes: Routes = [
    {
        path: '',
        component: MovieMainComponent,
        children: [
            {
                path: ':filter', component: MovieListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
