import { Component } from '@angular/core';

export interface moviesDatabase {
  name: string;
  category: string;
  route: number;
}

const ELEMENT_DATA: moviesDatabase[] = [
  {category: "Aventura", name: 'Era do gelo', route: 1},
  {category: "Aventura", name: 'Up: Altas aventuras', route: 2},
  {category: "Ação", name: 'Matrix', route: 3},
  {category: "Romance", name: 'Um amor para recordar', route: 4},
  {category: "Romance", name: 'Your name', route: 5},
  {category: "Ação", name: 'Rambo: Programado para matar', route: 6},
  {category: "Aventura", name: 'Bumbleblee', route: 7},
  {category: "Drama", name: 'A culpa é das estrelas', route: 8},
  {category: "Drama", name: 'História de um casamento', route: 9},
  {category: "Terror", name: 'Pânico 6', route: 10},
  {category: "Suspense", name: 'Hereditário', route: 11},
  {category: "Musical", name: 'Tick tick Boom', route: 12},
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  displayedColumns: string[] = ['category', 'name', 'route'];
  dataSource = ELEMENT_DATA;
}
