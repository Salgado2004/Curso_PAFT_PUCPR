import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  produtos = [
    {"nome": "Leite Condensado Frimesa", "medida": "un", "description": "395g - Integral - TP", "preço": 5.89, "img": "https://api.cndr.me/images/png/137802.png"},
    {"nome": "Maionese Hellmann's", "medida": "un", "description": "500g - Tradicional - Pote", "preço": 9.98, "img": "https://api.cndr.me/images/png/103667.png"},
    {"nome": "Coxa com Sobrecoxa de Frango Copacol", "medida": "un", "description": "800g - A Passarinho - Congelada - IQF", "preço": 7.99, "img": "https://api.cndr.me/images/png/6924.png"},
    {"nome": "Margarina Doriana", "medida": "un", "description": "500g - Tradicional - Com Sal", "preço": 5.98, "img": "https://api.cndr.me/images/png/186910.png"},
    {"nome": "Picanha Bovina Tipo A", "medida": "Kg", "description": "Resfriada", "preço": 64.90, "img": "https://api.cndr.me/images/png/5637.png"},
    {"nome": "Limão-taiti", "medida": "Kg", "description": "", "preço": 1.97, "img": "https://api.cndr.me/images/png/16268.png"},
    {"nome": "Sorvete Cremosíssimo Kibon", "medida": "un", "description": "2 Litros - Creme - Pote", "preço": 45.99, "img": "https://api.cndr.me/images/png/130362.png"},
    {"nome": "Atum Ralado Coqueiro", "medida": "un", "description": "170g - Óleo - Lata", "preço": 5.89, "img": "https://api.cndr.me/images/png/103284.png"},
    {"nome": "Cadeira Alta Mor", "medida": "un", "description": "Aço - Ref. 2002", "preço": 68.80, "img": "https://api.cndr.me/images/png/180211.png"},
    {"nome": "Abacate", "medida": "Kg", "description": "", "preço": 3.49, "img": "https://api.cndr.me/images/png/15890.png"},
    {"nome": "Whisky Johnnie Walker Red Label", "medida": "un", "description": "750ml", "preço": 69.90, "img": "https://api.cndr.me/images/png/1646421.png"},
    {"nome": "Costela Minga Bovina", "medida": "un", "description": "Congelada - Peça Inteira", "preço": 16.97, "img": "https://api.cndr.me/images/png/10162.png"}
   ]

}
