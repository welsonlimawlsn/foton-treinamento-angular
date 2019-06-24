import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  formSubmetido = new EventEmitter<Conta>();

  constructor() {
  }

  ngOnInit() {
  }

  submete(form: NgForm) {
    if (form.invalid) {
      alert('Existem campos invalidos');
    } else {
      this.formSubmetido.emit({
        agencia: this._conta.agencia,
        estado: this._conta.estado,
        tipo: this._conta.tipo,
        limiteChequeEspecial: this._conta.limiteChequeEspecial,
        diaAniversario: this._conta.diaAniversario,
        saldo: this._conta.saldo,
        titular: {
          cpf: this._conta.titular.cpf,
          nome: this._conta.titular.nome,
          status: this._conta.titular.status
        },
        numero: this._conta.numero
      });
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
