import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { pathToFileURL } from "url";
import { ParceiroCadastroComponent } from "./Cadastros/parceiro-cadastro/parceiro-cadastro.component";
import { ParceirosListaComponent } from "./Cadastros/parceiros-lista/parceiros-lista.component";
import { VendedoresListaComponent } from "./Cadastros/vendedores-lista/vendedores-lista.component";
import { VendedoresComponent } from "./Cadastros/vendedores/vendedores.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { CadastroComponent } from "./veiculos/cadastro/cadastro.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vendedores', component: VendedoresListaComponent },
    { path: 'vendedores/cadastro', component: VendedoresComponent },
    { path: 'parceiros', component: ParceirosListaComponent },
    { path: 'parceiros/cadastro', component: ParceiroCadastroComponent },
    {
        path: 'veiculos', loadChildren: () => import('./veiculos/veiculos-lista/veiculos.module')
            .then(m => m.VeiculosModule)
    }


]

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }