import {Cliente} from './cliente';

export class Conta {
  constructor(
    public agencia: number,
    public estado: string,
    public numero: number,
    public saldo: string,
    public tipo: string,
    public titular: Cliente,
    public diaAniversario?: number,
    public limiteChequeEspecial?: number
  ) {
  }
}
