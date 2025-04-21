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

  mudarEstilo(estado: string){
    let estados = estado.split(" ");
    if (estados[0] == "Novo"){
      console.log(estados[0]);
      return "linear-gradient(45deg, #59bb4164, #7dbe6d64, #a1ff8964)"
    } else if(estados[0] == "Usado"){
      return "linear-gradient(45deg, #bb784164, #be916d64, #fff78964)"
    } else{
      return "transparent"
    }
  }
}
