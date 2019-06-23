import {Component, Input, OnInit} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-conta',
  templateUrl: './formulario-conta.component.html',
  styleUrls: ['./formulario-conta.component.css']
})
export class FormularioContaComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _conta: Conta;

  constructor() {
  }

  ngOnInit() {
  }

  submete(form: NgForm) {
    if (form.invalid) {
      alert('Existem campos invalidos');
    } else {
      console.log(this._conta);
    }
  }

  @Input()
  set conta(conta: Conta) {
    this._conta = {
      numero: conta.numero,
      saldo: conta.saldo,
      titular: {
        status: conta.titular.status,
        nome: conta.titular.nome,
        cpf: conta.titular.cpf
      },
      diaAniversario: conta.diaAniversario,
      limiteChequeEspecial: conta.limiteChequeEspecial,
      tipo: conta.tipo,
      estado: conta.estado,
      agencia: conta.agencia
    };
  }
}
