import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSimpleSidebarComponent } from './ng-simple-sidebar.component';

@NgModule({
    declarations: [NgSimpleSidebarComponent],
    imports: [CommonModule, RouterModule],
    exports: [NgSimpleSidebarComponent]
})
export class NgSimpleSidebarModule {}
