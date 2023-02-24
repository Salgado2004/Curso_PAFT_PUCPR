import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  @Input() item: any;
  nome: any;
  img: any;
  preco: any;
  quantidade: any;

  ngOnInit(){
    this.nome = this.item['nome'];
    this.img = this.item['img'];
    this.preco = String(this.item['preço total']);
    this.quantidade = this.item['quantidade'];
  }
}
