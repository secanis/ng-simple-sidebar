import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

// Import libraries
import { SimpleSidebarComponent } from '../component/simple-sidebar.component';
import { SimpleSidebarService } from '../component/simple-sidebar.service';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        SimpleSidebarComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        SimpleSidebarService
    ]
})

export class AppModule {
    constructor() {}
}
