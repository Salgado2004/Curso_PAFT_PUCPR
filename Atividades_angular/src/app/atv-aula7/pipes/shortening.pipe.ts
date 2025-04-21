import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortening'
})
export class ShorteningPipe implements PipeTransform {

  transform(texto: string, maxLenght: number): string {
    if (texto.length > maxLenght){
      texto = texto.slice(0, maxLenght)
      texto += " ..."
    }
    return texto
  }

}
