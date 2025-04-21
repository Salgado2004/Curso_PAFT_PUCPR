import { Component } from '@angular/core';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent {
  nome = 'Mangás BNH';
  categoria = '';
  itens = [
    {"nome": "Volume 1", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71bELfIWTDL.jpg"},
    {"nome": "Volume 2", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/715BlNAXJfL.jpg"},
    {"nome": "Volume 3", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/61ykE45XAfL.jpg"},
    {"nome": "Volume 4", "quantidade": 2, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71shV5-YLfL.jpg"},
    {"nome": "Volume 5", "quantidade": 2, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/51Fo+2U0QAL._SX343_BO1,204,203,200_.jpg"},
    {"nome": "Volume 7", "quantidade": 1, "estado": "Usado (aberto)", "img": "https://m.media-amazon.com/images/I/61sb4v2tc2L.jpg"},
    {"nome": "Volume 12", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71ONeaiDvcL.jpg"},
    {"nome": "Volume 13", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71UyG2ZxEZL.jpg"},
    {"nome": "Volume 14", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71293Jg-k7L.jpg"},
    {"nome": "Volume 15", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/61HjrKkfW-L.jpg"},
    {"nome": "Volume 16", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71wKnc7y6VL.jpg"},
    {"nome": "Volume 17", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71+JZZijWXL.jpg"},
    {"nome": "Volume 18", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71S-0LuIzUL.jpg"},
    {"nome": "Volume 19", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71TULrM3yML.jpg"},
    {"nome": "Volume 20", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71GLevpnf2L.jpg"},
    {"nome": "Volume 21", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/711UoTnUf4L.jpg"},
    {"nome": "Volume 22", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71djDVw5AzL.jpg"},
    {"nome": "Volume 23", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/51Gc6rwtDFL._SX343_BO1,204,203,200_.jpg"},
    {"nome": "Volume 25", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/81BvXpFXklL.jpg"},
    {"nome": "Volume 26", "quantidade": 1, "estado": "Novo (fechado)", "img": "https://m.media-amazon.com/images/I/61IgXISN+-L.jpg"},
    {"nome": "Volume 27", "quantidade": 1, "estado": "Novo (fechado)", "img": "https://m.media-amazon.com/images/I/81oGQi3K+5L.jpg"},
    {"nome": "Volume 28", "quantidade": 1, "estado": "Novo (fechado)", "img": "https://m.media-amazon.com/images/I/91iwnNbQDUL.jpg"},
    {"nome": "Volume 29", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/61ARrDpMiVL.jpg"},
    {"nome": "Volume 30", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/716I2Sf4w+L.jpg"},
    {"nome": "Volume 31", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71QxQ+x1alL.jpg"},
    {"nome": "Volume 32", "quantidade": 1, "estado": "Novo (aberto)", "img": "https://m.media-amazon.com/images/I/71ScxyzEh0L.jpg"},
  ];
}
