import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSidebarComponent } from './ng-simple-sidebar';
import { SimpleSidebarService } from './ng-simple-sidebar.service';

export * from './ng-simple-sidebar';
export * from './ng-simple-sidebar.service';

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
