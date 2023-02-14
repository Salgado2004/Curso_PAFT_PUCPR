import { Component } from '@angular/core';

export interface moviesDatabase {
  name: string;
  category: string;
  route: number;
}

const ELEMENT_DATA: moviesDatabase[] = [
  {category: "Aventura", name: 'Hydrogen', route: 1.0079},
  {category: "Aventura", name: 'Helium', route: 4.0026},
  {category: "Ação", name: 'Lithium', route: 6.941},
  {category: "Romance", name: 'Beryllium', route: 9.0122},
  {category: "Romance", name: 'Boron', route: 10.811},
  {category: "Ação", name: 'Carbon', route: 12.0107},
  {category: "Aventura", name: 'Nitrogen', route: 14.0067},
  {category: "Drama", name: 'Oxygen', route: 15.9994},
  {category: "Drama", name: 'Fluorine', route: 18.9984},
  {category: "Terror", name: 'Neon', route: 20.1797},
  {category: "Musical", name: 'Neon', route: 20.1797},
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
