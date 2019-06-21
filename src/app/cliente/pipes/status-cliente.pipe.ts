import {Pipe, PipeTransform} from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Pipe({
  name: 'statusCliente'
})
export class StatusClientePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNotNullOrUndefined(value)) {
      switch (value) {
        case 'ATIVO':
          return 'Ativo';
        case 'PENDENTE':
          return 'Pendente';
      }
    }
    return null;
  }

}
