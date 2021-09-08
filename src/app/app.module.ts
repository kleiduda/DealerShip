import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './navegacao/menu/topbar/topbar.component';
import { HorizontalComponent } from './navegacao/menu/horizontal/horizontal.component';
import { CadastroComponent } from './veiculos/cadastro/cadastro.component';
import { VendedoresComponent } from './Cadastros/vendedores/vendedores.component';
import { VendedoresListaComponent } from './Cadastros/vendedores-lista/vendedores-lista.component';
import { ParceiroCadastroComponent } from './Cadastros/parceiro-cadastro/parceiro-cadastro.component';
import { ParceirosListaComponent } from './Cadastros/parceiros-lista/parceiros-lista.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './app-route';
import { APP_BASE_HREF } from '@angular/common';
import { NavigationModule } from './navegacao/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HorizontalComponent,
    CadastroComponent,
    VendedoresComponent,
    VendedoresListaComponent,
    ParceiroCadastroComponent,
    ParceirosListaComponent,
    DashboardComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
