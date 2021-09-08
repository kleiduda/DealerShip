
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VeiculoCadastroComponent } from "../veiculo-cadastro/veiculo-cadastro.component";
import { VeiculosListaComponent } from "./veiculos-lista.component";

const veiculoRouterConfig: Routes = [
    { path: '', component: VeiculosListaComponent },
    { path: 'cadastro', component: VeiculoCadastroComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(veiculoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class VeiculoRoutingModule { }