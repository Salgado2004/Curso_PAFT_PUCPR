import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
  date: any;
  data: string | undefined;
  hora: number | undefined;
  minutes: number | undefined;

  constructor(){
    this.date = new Date();
    this.data = this.date.toLocaleDateString();
    this.hora = this.date.getHours();
    this.minutes = this.date.getMinutes();
  }

}
