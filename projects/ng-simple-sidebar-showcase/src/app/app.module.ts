import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgSimpleSidebarModule } from 'projects/ng-simple-sidebar/src/public-api';
import { WelcomeComponent } from './components/welcome.component';
import { AboutComponent } from './components/about.component';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, AboutComponent],
    imports: [BrowserModule, AppRoutingModule, NgSimpleSidebarModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
