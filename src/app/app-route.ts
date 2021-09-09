import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { pathToFileURL } from "url";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'veiculos', loadChildren: () => import('./veiculos/veiculos-lista/veiculos.module')
            .then(m => m.VeiculosModule)
    },
    {
        path: 'vendedores', loadChildren: () => import('./Cadastros/vendedores/vendedores.module')
            .then(m => m.VendedoresModule)
    },
    {
        path: 'fornecedores', loadChildren:() => import('./Cadastros/Fornecedores/fornecedores.module')
        .then(m => m.Fornecedoresmodule)
    },
    {
        path: 'conta',
        loadChildren: () => import('./conta/conta.module').then(m =>m.ContaModule)
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