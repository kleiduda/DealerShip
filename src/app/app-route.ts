import { Routes } from "@angular/router";
import { ParceiroCadastroComponent } from "./Cadastros/parceiro-cadastro/parceiro-cadastro.component";
import { ParceirosListaComponent } from "./Cadastros/parceiros-lista/parceiros-lista.component";
import { VendedoresListaComponent } from "./Cadastros/vendedores-lista/vendedores-lista.component";
import { VendedoresComponent } from "./Cadastros/vendedores/vendedores.component";
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { CadastroComponent } from "./veiculos/cadastro/cadastro.component";
import { ListaComponent } from "./veiculos/lista/lista.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'veiculos', component: ListaComponent},
    {path: 'veiculos/cadastro', component: CadastroComponent},
    {path: 'vendedores', component: VendedoresListaComponent},
    {path: 'vendedores/cadastro', component: VendedoresComponent},
    {path: 'parceiros', component: ParceirosListaComponent},
    {path: 'parceiros/cadastro', component: ParceiroCadastroComponent}
    
]