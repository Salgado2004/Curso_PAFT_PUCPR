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
    {id: 4, category: "Romance", name: 'Um amor para recordar', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 5, category: "Romance", name: 'Your name', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 6, category: "Ação", name: 'Rambo: Programado para matar', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 7, category: "Aventura", name: 'Bumbleblee', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 8, category: "Drama", name: 'A culpa é das estrelas', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 9, category: "Drama", name: 'História de um casamento', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 10, category: "Terror", name: 'Pânico 6', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 11, category: "Suspense", name: 'Hereditário', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
    {id: 12, category: "Musical", name: 'Tick tick Boom', cover: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg', nota: 73, diretor: 'Chris Wedge', original: 'Ice Age', ano: 2002, status: 'Lançado', phrase: 'Eles vieram. Eles descongelaram. Eles conquistaram', duration: '1h 22m'},
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
