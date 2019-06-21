import {Pipe, PipeTransform} from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNotNullOrUndefined(value)) {
      switch (value) {
        case 'POUPANCA':
          return 'Conta Poupança';
        case 'CORRENTE':
          return 'Conta Corrente';
      }
    }
    return null;
  }

}
