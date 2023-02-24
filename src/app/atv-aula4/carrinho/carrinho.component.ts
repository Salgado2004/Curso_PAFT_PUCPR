import { Component } from '@angular/core';
import { GlobalEventEmitterService } from '../global-event-emitter.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  items: any = [];

  ngOnInit(){
    GlobalEventEmitterService.get('newItem').subscribe(newItem => {
      let item = newItem;
      this.items.push(item);
      console.log(this.items);
    })
  }

}
