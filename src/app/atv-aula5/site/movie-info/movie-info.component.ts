import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
})
export class MovieInfoComponent implements OnInit{
  movieID: any;
  movieName: string | undefined;
  movieCategory: string | undefined;
  movieCover: string | undefined;
  movieNota: number | undefined;
  movieDiretor: string | undefined;
  movieOriginal: string | undefined;
  movieStatus: string | undefined;
  movieAno: number | undefined;
  moviePhrase: string | undefined;
  movieDuration: string | undefined;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value: number | undefined;

  moviedb = [
    {id: 1, category: "Aventura", name: 'A Era do gelo', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 2, category: "Aventura", name: 'Up: Altas aventuras', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kms7XVDS6v7ic2jEw6N4DslQrWx.jpg', nota: 79, diretor: 'Bob Peterson', original: 'Up', ano: 2009, status: 'Lançado', phrase: 'A aventura está lá fora', duration: '1h 36m'},
    {id: 3, category: "Ação", name: 'Matrix', route: 3, cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg', nota: 82, diretor: 'Lana Wachowski', original: 'The matrix', ano: 1999, status: 'Lançado', phrase: 'A Matrix está em todo lugar. É tudo que nos rodeia. Mesmo agora, nesta sala. Você pode vê-la quando olha pela janela, ou quando você ligar sua televisão.', duration: '2h 16m'},
    {id: 4, category: "Romance", name: 'Um amor para recordar', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s2UxmxiIOupjHmjs1Jl7TdWDVFc.jpg', nota: 77, diretor: 'Adam Shankman', original: 'A Walk to Remember', ano: 2002, status: 'Lançado', phrase: 'Tudo se resume a quem está ao seu lado', duration: '1h 41m'},
    {id: 5, category: "Romance", name: 'Your name', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7bAtBUQRC1M4zaIlihesBPTAJ8a.jpg', nota: 85, diretor: 'Makoto Shinkai', original: '君の名は (kimi no na ha)', ano: 2016, status: 'Lançado', phrase: 'It was almost like seeing something out of a dream, nothing more or less than a breathtaking view', duration: '1h 46m'},
    {id: 6, category: "Ação", name: 'Rambo: Programado para matar', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dDJ4YOz7baCHH6ZJPut9NcCgNl1.jpg', nota: 75, diretor: 'Ted Kotcheff', original: 'First Blood', ano: 1982, status: 'Lançado', phrase: 'Desta vez ele vai lutar pela própria vida.', duration: '1h 34m'},
    {id: 7, category: "Aventura", name: 'Bumbleblee', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x9vAcoPsyFQ6m3Re5S9DQSbudyi.jpg', nota: 67, diretor: 'Travis Knight', original: 'Bumbleblee', ano: 2018, status: 'Lançado', phrase: 'Todo herói tem um começo', duration: '1h 54m'},
    {id: 8, category: "Drama", name: 'A culpa é das estrelas', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lW1HA1JqXxKp1x5eSzEqTNxfIgA.jpg', nota: 76, diretor: 'Josh Boone', original: 'The Fault in Our Stars', ano: 2014, status: 'Lançado', phrase: 'Nem todo mundo que chega na sua vida, vem com a intenção de ficar', duration: '2h 12m'},
    {id: 9, category: "Drama", name: 'História de um casamento', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/LaZ5rwaMvVH20J8O2Nu9uuXGI5.jpg', nota: 78, diretor: 'Noah Baumbach', original: 'Marriage Story', ano: 2019, status: 'Lançado', phrase: 'Onde há amor, há um caminho', duration: '2h 16m'},
    {id: 10, category: "Terror", name: 'Pânico IV', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oWPBXgmRxFIeo9Ad4EUye8JWs7v.jpg', nota: 0, diretor: 'Matt Bettinelli-Olpin', original: 'Scream VI', ano: 2023, status: 'Pós-Produção', phrase: 'Nova York. Novas regras', duration: '2h 3m'},
    {id: 11, category: "Suspense", name: 'Hereditário', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ysdkXpoeDYLpgodiNGBW29S4o2U.jpg', nota: 73, diretor: 'Ari Aster', original: 'Hereditary', ano: 2018, status: 'Lançado', phrase: 'Toda as famílias escondem um segredo', duration: '2h 7m'},
    {id: 12, category: "Musical", name: 'Tick, tick... Boom', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3wW33TlWrmWi6YOJKrv1KGSoIdI.jpg', nota: 77, diretor: 'Lin-Manuel Miranda', original: 'Tick, tick... Boom', ano: 2021, status: 'Lançado', phrase: 'How much time do we have to do something great?', duration: '1h 55m'},
  ];
 
  constructor(private activatedRoute : ActivatedRoute) { }
 
  ngOnInit(): void {
    this.movieID = this.activatedRoute.snapshot.paramMap.get("id");
    this.moviedb.forEach(element => {
        if (element.id == parseInt(this.movieID)){
          this.movieName = element.name;
          this.movieCategory = element.category;
          this.movieCover = element.cover;
          this.movieNota = element.nota;
          this.movieDiretor = element.diretor;
          this.movieOriginal = element.original;
          this.movieStatus = element.status;
          this.movieAno = element.ano;
          this.moviePhrase = element.phrase;
          this.movieDuration = element.duration;
          this.value = this.movieNota;
        }
    });
  }

  
 
}
