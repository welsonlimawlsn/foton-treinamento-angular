import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContaModule} from './conta/conta.module';
import locatePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {ClienteModule} from './cliente/cliente.module';
import {NegocioModule} from './negocio/negocio.module';

registerLocaleData(locatePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContaModule,
    ClienteModule,
    NegocioModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
