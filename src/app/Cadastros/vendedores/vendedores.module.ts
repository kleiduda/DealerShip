import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VendedoresListaComponent } from "../vendedores/vendedores-lista/vendedores-lista.component";
import { VendedoresRoutingModule } from "./vendedores.route";
import { VendedorCadastroComponent } from './vendedor-cadastro/vendedor-cadastro.component';

@NgModule({
    declarations:[
        VendedoresListaComponent,
        VendedorCadastroComponent
    ],
    imports:[
        CommonModule,
        VendedoresRoutingModule
    ],
    exports:[]
})

export class VendedoresModule{}