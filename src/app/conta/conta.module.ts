import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ContaRoutingModule } from "./conta.route";
import { HttpClientModule} from '@angular/common/http'
import { LoginComponent } from "./login/login.component";
import { ContaComponent } from "./conta.component";

@NgModule({
    declarations:[
        ContaComponent,
        LoginComponent
    ],
    imports:[
        CommonModule,
        ContaRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports:[]
})

export class ContaModule{}