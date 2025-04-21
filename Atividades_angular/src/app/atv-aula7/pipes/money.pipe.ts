import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(".", ",");
    return `R$ ${value}`;
  }

}
