import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtvAula2Component } from './atv-aula2/atv-aula2.component';
import { AtvAula3Component } from './atv-aula3/atv-aula3.component';
import { AtvAula4Component } from './atv-aula4/atv-aula4.component';
import { AtvAula5Component } from './atv-aula5/atv-aula5.component';
import { CategoriesComponent } from './atv-aula5/site/categories/categories.component';
import { MovieInfoComponent } from './atv-aula5/site/movie-info/movie-info.component';

const routes: Routes = [
  {path: "", redirectTo: "/aula2", pathMatch: "full"},
  {path: "aula2", component: AtvAula2Component},
  {path: "aula3", component: AtvAula3Component},
  {path: "aula4", component: AtvAula4Component},
  {path: "aula5", component: AtvAula5Component, 
    children : [
      {path: "", redirectTo: "categories", pathMatch: "full"},
      {path: "categories", component: CategoriesComponent},
      {path: "all", redirectTo: "categories", pathMatch: "full"},
      {path: "categories/movieInfo/:id", component: MovieInfoComponent}  
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
