import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListagemContaComponent} from './listagem-conta/listagem-conta.component';
import {EstadoPipe} from './pipes/estado.pipe';
import {TipoPipe} from './pipes/tipo.pipe';
import {FormularioContaComponent} from './formulario-conta/formulario-conta.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListagemContaComponent,
    EstadoPipe,
    TipoPipe,
    FormularioContaComponent
  ],
  exports: [
    ListagemContaComponent,
    FormularioContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContaModule {
}
