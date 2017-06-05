import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSidebarComponent } from './simple-sidebar.component';
import { SimpleSidebarService } from './simple-sidebar.service';

export * from './simple-sidebar.component';
export * from './simple-sidebar.service';

@NgModule({
    imports: [
        CommonModule
    ],
        declarations: [
        SimpleSidebarComponent,
    ],
    exports: [
        SimpleSidebarComponent
    ]
})

export class SimpleSidebar {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SimpleSidebar,
            providers: [SimpleSidebarService]
        };
    }
}
