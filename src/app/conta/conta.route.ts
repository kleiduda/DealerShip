import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContaComponent } from "./conta.component";
import { LoginComponent } from "./login/login.component";

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaComponent,
        children:[
            {path: 'login', component: LoginComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports:[
        RouterModule
    ]
})

export class ContaRoutingModule { }