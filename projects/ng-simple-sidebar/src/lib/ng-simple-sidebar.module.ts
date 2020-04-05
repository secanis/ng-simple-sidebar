import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSimpleSidebarComponent } from './ng-simple-sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item.component';
import { SidebarItemIconComponent } from './components/sidebar-item-icon.component';
import { SidebarContainerComponent } from './components/sidebar-container.component';

@NgModule({
    declarations: [NgSimpleSidebarComponent, SidebarItemComponent, SidebarItemIconComponent, SidebarContainerComponent],
    imports: [CommonModule, RouterModule],
    exports: [NgSimpleSidebarComponent]
})
export class NgSimpleSidebarModule {}
