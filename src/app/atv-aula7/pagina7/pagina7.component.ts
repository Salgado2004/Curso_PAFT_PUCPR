import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina7',
  templateUrl: './pagina7.component.html',
  styleUrls: ['./pagina7.component.css']
})
export class Pagina7Component {
  valorMonetario: string = '';
  list: string = '';
  option: string = "even";
  maxLenght: number = 6;
  texto: string = '';

  selection(evento: Event){
    this.option = (evento.target as HTMLInputElement).value;
  }
}
