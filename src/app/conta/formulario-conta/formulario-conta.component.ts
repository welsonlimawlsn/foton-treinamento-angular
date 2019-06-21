import {Component, OnInit} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';

@Component({
  selector: 'app-formulario-conta',
  templateUrl: './formulario-conta.component.html',
  styleUrls: ['./formulario-conta.component.css']
})
export class FormularioContaComponent implements OnInit {

  conta: Conta;

  constructor() {
  }

  ngOnInit() {
  }

}
