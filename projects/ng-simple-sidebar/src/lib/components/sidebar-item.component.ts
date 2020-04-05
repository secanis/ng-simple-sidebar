import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimpleSidebarItem } from '../models/sidebar-item';
import { SimpleSidebarAbstractColors } from '../models/sidebar-configuration';

@Component({
    selector: 'lib-sidebar-item',
    template: `
        <a
            *ngIf="item.routerLink"
            (click)="clickAction.emit()"
            [ngStyle]="{ color: colors.fColor }"
            [ngClass]="{ 'dock-open-item': isOpen }"
            [routerLink]="item.routerLink"
            [title]="item.name"
            class="menu-item pointer"
        >
            <lib-sidebar-item-icon
                [item]="item"
                [isOpen]="isOpen"
            ></lib-sidebar-item-icon>
        </a>
        <a
            *ngIf="item.url"
            (click)="clickAction.emit()"
            [ngStyle]="{ color: colors.fColor }"
            [ngClass]="{ 'dock-open-item': isOpen }"
            [target]="item.target"
            [href]="item.url"
            [title]="item.name"
            class="menu-item pointer"
        >
            <lib-sidebar-item-icon
                [item]="item"
                [isOpen]="isOpen"
            ></lib-sidebar-item-icon>
        </a>
    `,
    styles: [
        `
            .menu-item {
                display: block;
                text-decoration: none;
                font-weight: lighter;
                padding-top: 8px;
                padding-bottom: 8px;
                height: 40px;
            }

            .menu-item:active,
            .menu-item:visited,
            .menu-item:link {
                text-decoration: none;
            }

            .menu-item:hover {
                font-weight: normal;
                text-decoration: none;
            }

            .pointer {
                cursor: pointer;
            }

            .dock-open-item {
                min-width: 200px;
            }
        `
    ]
})
export class SidebarItemComponent {
    @Input() item: SimpleSidebarItem;
    @Input() colors: SimpleSidebarAbstractColors;
    @Input() isOpen: boolean;

    @Output() clickAction: EventEmitter<void> = new EventEmitter<void>();
}
