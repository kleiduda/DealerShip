import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HorizontalComponent } from "./menu/horizontal/horizontal.component";
import { MenuComponent } from "./menu/menu.component";
import { TopbarComponent } from "./menu/topbar/topbar.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations:[
        MenuComponent,
        HomeComponent,
        FooterComponent,
        TopbarComponent,
        HorizontalComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        HomeComponent,
        FooterComponent,
        TopbarComponent,
        HorizontalComponent
    ]
})

export class NavigationModule{}