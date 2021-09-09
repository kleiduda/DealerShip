import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FornecedoresListaComponent } from "./fornecedores-lista/fornecedores-lista.component";

const fornecedoresRouterConfig: Routes=[
    { path: '', component: FornecedoresListaComponent}
];

NgModule({
    imports:[
        RouterModule.forChild(fornecedoresRouterConfig)
    ]
})

export class FornecedoresRoutingConfig{}