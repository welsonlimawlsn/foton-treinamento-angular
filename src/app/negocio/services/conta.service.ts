import {Injectable} from '@angular/core';
import {Conta} from '../dominio/conta';

@Injectable()
export class ContaService {

  constructor() {
  }

  getContas(): Conta[] {
    return [
      {
        agencia: 1234,
        numero: 1,
        estado: 'ATIVA',
        saldo: '123457',
        tipo: 'CORRENTE',
        titular: {
          nome: 'Welson de Lima Teles',
          cpf: '12345678912',
          status: 'ATIVO'
        },
        limiteChequeEspecial: 500
      },
      {
        agencia: 1234,
        numero: 2,
        estado: 'ENCERRADA',
        saldo: '0',
        tipo: 'POUPANCA',
        titular: {
          nome: 'Maria Jesus de Lima Menezes',
          cpf: '45678912347',
          status: 'PENDENTE'
        },
        diaAniversario: 28
      },
      {
        agencia: 1234,
        numero: 3,
        estado: 'ATIVA',
        saldo: '123457',
        tipo: 'POUPANCA',
        titular: {
          nome: 'Wilson de Lima Teles',
          cpf: '45784287674',
          status: 'ATIVO'
        },
        limiteChequeEspecial: 500
      },
      {
        agencia: 1234,
        numero: 2,
        estado: 'ATIVA',
        saldo: '0',
        tipo: 'POUPANCA',
        titular: {
          nome: 'Maria Jesus de Lima Menezes',
          cpf: '45678912347',
          status: 'ATIVA'
        },
        diaAniversario: 28
      }
    ];
  }
}
