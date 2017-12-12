import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleSidebarModule } from '../../../dist';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
