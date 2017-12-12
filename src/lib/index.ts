import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './service/sidebar.service';

export * from './service/sidebar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent],
  providers: [SidebarService]
})
export class SimpleSidebarModule { }
