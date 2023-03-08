import { Component, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { GlobalEventEmitterService } from '../global-event-emitter.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input() login!: boolean;
  items: Array<any> = [];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(){
    GlobalEventEmitterService.get('newItem').subscribe(newItem => {
      let item = newItem;
      let exists = this.items.findIndex((value: any, index: number, array: any) =>{
        return value['nome'] == item['nome'];
      });
      console.log(exists);
      if (exists == -1){
        this.items.push(item);
        console.log(this.items);
      } else{
        this.items[exists] = item;
      }

    })

    GlobalEventEmitterService.get("removeItem").subscribe(removedItem => {
      let item = removedItem;
      let index = this.items.indexOf(item);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    })
  }

  desativarButton(){
    return this.items.length == 0 ? true:false
  }

  finalizaCompra(){
      if (this.login){
        this._snackBar.open("Compra finalizada com sucesso!"," ", {
          duration: 2000,
        });
      } else{
        this._snackBar.open("Você deve estar logado para acessar essa função"," ", {
          duration: 2000,
        });
      }
      
  }

}
