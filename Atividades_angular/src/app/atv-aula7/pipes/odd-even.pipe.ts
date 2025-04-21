import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddEven'
})
export class OddEvenPipe implements PipeTransform {
  lista: any[] | undefined;
  lista2: string = '';
  resto: number | undefined;

  transform(list: string, option: string): string {
    this.lista2 = '';
    this.lista = list.split(",");
    if (option == "even"){
      this.lista.forEach(element => {
        this.resto = element % 2;
        if (this.resto == 0){
          this.lista2 += `${element} `
        }
      });
      return this.lista2;
    } else{
      this.lista.forEach(element => {
        this.resto = element % 2;
        if (this.resto != 0){
          this.lista2 += `${element} `
        }
      });
      return this.lista2;
    }
  }

}
