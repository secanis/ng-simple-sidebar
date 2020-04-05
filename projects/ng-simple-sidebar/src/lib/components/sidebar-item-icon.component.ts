import { Component, Input } from '@angular/core';
import { SimpleSidebarItem } from '../models/sidebar-item';

@Component({
    selector: 'lib-sidebar-item-icon',
    template: `
        <i *ngIf="item.icon" class="menu-icon-item" [class]="item.icon"></i>
        <span *ngIf="isOpen" class="menu-item-label">{{ item.name }}</span>
    `,
    styles: [
        `
            .menu-icon-item {
                font-size: 30px;
            }

            .menu-icon-item {
                display: inline-block;
                margin-right: 15px;
            }

            .menu-item-label {
                vertical-align: super;
            }
        `
    ]
})
export class SidebarItemIconComponent {
    @Input() item: SimpleSidebarItem;
    @Input() isOpen: boolean;
}
