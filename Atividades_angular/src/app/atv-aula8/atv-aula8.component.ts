import { Component, ViewChild } from '@angular/core';
import { CatFactsService } from './cat-facts.service';
import { MatTable } from '@angular/material/table';

export interface catFacts {
  fact: string;
}

const ELEMENT_DATA: catFacts[] = [];

@Component({
  selector: 'app-atv-aula8',
  templateUrl: './atv-aula8.component.html',
  styleUrls: ['./atv-aula8.component.css']
})
export class AtvAula8Component {
  data: any;
  count: number = 3

  displayedColumns: string[] = ['facts'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<catFacts>;

  constructor(private catFacts: CatFactsService){}

  ngOnInit(){
    this.catFacts.getFacts(this.count).subscribe(data =>{
      this.data = data;

      for (let i = 0; i < this.count; i++){
        this.dataSource.push({fact: this.data['data'][i]});
        this.table.renderRows();
      }
    });
  }

  reload(){
    this.ngOnInit()
  }
}
