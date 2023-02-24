import { Component, Input } from '@angular/core';
import { GlobalEventEmitterService } from '../global-event-emitter.service';

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
  medida: any;
  quantidade: number = 0;
  item: any;

  ngOnInit(){
    this.nome = this.produto['nome'];
    this.description = this.produto['description'];
    this.img = this.produto['img'];
    this.preco = String(this.produto['preço']);
    this.medida = this.produto['medida'];
  }

  desativarButton(){
    return this.quantidade == 0 ? true:false
  }

  addCarrinho(){
    this.item = {
      "nome": this.nome,
      "quantidade": this.quantidade,
      "preço total": this.produto['preço'] * this.quantidade,
      "img": this.img
    }
    GlobalEventEmitterService.get('newItem').emit(this.item);
  }
}
