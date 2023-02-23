import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection-iten',
  templateUrl: './collection-iten.component.html',
  styleUrls: ['./collection-iten.component.css']
})
export class CollectionItenComponent {
  @Input() item: any;
  nome: string | undefined;
  quantidade: number | undefined;
  estado: string | undefined;
  img: string | undefined;

  ngOnInit(){
    this.nome = this.item['nome'];
    this.img = this.item['img'];
    this.estado = this.item['estado'];
    this.quantidade = this.item['quantidade']
  }
}
