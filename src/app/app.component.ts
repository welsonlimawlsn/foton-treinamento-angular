import {Component, OnInit} from '@angular/core';
import {Conta} from './negocio/dominio/conta';
import {ContaService} from './negocio/services/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aula1';
  contas: Conta[];
  contaSelecionada: Conta;
  novaConta: Conta = {
    agencia: 0,
    estado: '',
    tipo: '',
    limiteChequeEspecial: 0,
    diaAniversario: 0,
    titular: {
      cpf: '',
      nome: '',
      status: ''
    },
    saldo: '',
    numero: 0
  };

  constructor(private contaService: ContaService) {
  }

  ngOnInit(): void {
    this.contas = this.contaService.getContas();
  }

  setContaSelecionada(conta: Conta) {
    this.contaSelecionada = conta;
  }
}
