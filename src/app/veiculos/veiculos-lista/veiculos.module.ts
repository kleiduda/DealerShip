import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VeiculoCadastroComponent } from "../veiculo-cadastro/veiculo-cadastro.component";
import { VeiculosListaComponent } from "./veiculos-lista.component";
import { VeiculoRoutingModule } from "./veiculos.route";

@NgModule({
    declarations:[
        VeiculosListaComponent,
        VeiculoCadastroComponent
    ],
    imports:[
        CommonModule,
        VeiculoRoutingModule
    ],
    exports:[
    ]
})

export class VeiculosModule{}