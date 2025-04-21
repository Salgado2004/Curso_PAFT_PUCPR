import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtvAula2Component } from './atv-aula2/atv-aula2.component';
import { AtvAula3Component } from './atv-aula3/atv-aula3.component';
import { AtvAula4Component } from './atv-aula4/atv-aula4.component';
import { AtvAula5Component } from './atv-aula5/atv-aula5.component';
import { movieListComponent } from './atv-aula5/site/movie-list/movie-list.component';
import { MovieInfoComponent } from './atv-aula5/site/movie-info/movie-info.component';
import { AtvAula7Component } from './atv-aula7/atv-aula7.component';
import { CategoriesComponent } from './atv-aula5/site/categories/categories.component';
import { AtvAula8Component } from './atv-aula8/atv-aula8.component';
import { LoginComponent } from './atv-aula5/site/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "/aula2", pathMatch: "full"},
  {path: "aula2", component: AtvAula2Component},
  {path: "aula3", component: AtvAula3Component},
  {path: "aula4", component: AtvAula4Component},
  {path: "aula5", component: AtvAula5Component,
    children : [
      {path: "", redirectTo: "movieList/all", pathMatch: "full"},
      {path: "all", redirectTo: "movieList/all", pathMatch: "full"},
      {path: "movieList/:category", component: movieListComponent},
      {path: "categories", component: CategoriesComponent},
      {path: "login", component: LoginComponent},
      {path: "movieList/:category/movieInfo/:id", component: MovieInfoComponent}
    ]},
    {path: "aula7", component: AtvAula7Component},
    {path: "aula8", component: AtvAula8Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
