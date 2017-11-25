import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

// Import libraries
import { SimpleSidebarComponent } from '../../lib/ng-simple-sidebar';
import { SimpleSidebarService } from '../../lib/ng-simple-sidebar.service';

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
