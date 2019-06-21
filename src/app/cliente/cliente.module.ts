import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DadosClienteComponent} from './dados-cliente/dados-cliente.component';
import { StatusClientePipe } from './pipes/status-cliente.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [DadosClienteComponent, StatusClientePipe, CpfPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DadosClienteComponent
  ]
})
export class ClienteModule {
}
