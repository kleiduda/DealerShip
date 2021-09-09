import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { VendedoresListaComponent } from "../vendedores/vendedores-lista/vendedores-lista.component";
import { VendedorCadastroComponent } from "./vendedor-cadastro/vendedor-cadastro.component";

const vendedoresRouterConfig: Routes=[
    { path: '', component: VendedoresListaComponent},
    { path: 'cadastro', component: VendedorCadastroComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(vendedoresRouterConfig)
    ],
    exports:[
        RouterModule
    ]
})

export class VendedoresRoutingModule{}