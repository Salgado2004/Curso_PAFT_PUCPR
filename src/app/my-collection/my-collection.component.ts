import { Component } from '@angular/core';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent {
  nome = 'Minha coleção';
  categoria = '';
  itens = [];
}
