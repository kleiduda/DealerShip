import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './app-route';
import { APP_BASE_HREF } from '@angular/common';

import { NavigationModule } from './navegacao/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
