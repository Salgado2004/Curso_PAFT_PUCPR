import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() produto: any;
  nome: any;
  description: any;
  img: any;
  preco: any;

  ngOnInit(){
    this.nome = this.produto['nome'];
    this.description = this.produto['description'];
    this.img = this.produto['img'];
    this.preco = String(this.produto['preço']);
  }
}
