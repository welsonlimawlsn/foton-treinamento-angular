import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';

@Component({
  selector: 'app-listagem-conta',
  templateUrl: './listagem-conta.component.html',
  styleUrls: ['./listagem-conta.component.css']
})
export class ListagemContaComponent implements OnInit {

  @Input()
  contas: Conta[];

  @Output()
  seleciona = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selecionaConta(conta: Conta) {
    this.seleciona.emit(conta);
  }
}
