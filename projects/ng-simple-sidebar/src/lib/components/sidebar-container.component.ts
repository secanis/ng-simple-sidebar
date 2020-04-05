import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimpleSidebarItem } from '../models/sidebar-item';
import { SimpleSidebarColors, SimpleSidebarConfiguration } from '../models/sidebar-configuration';

@Component({
    selector: 'lib-sidebar-container',
    template: `
        <div class="sidebar-container">
            <!-- top side menu entries -->
            <lib-sidebar-item
                *ngFor="let item of itemsTop"
                [item]="item"
                [colors]="colors"
                [isOpen]="isOpen"
                (clickAction)="linkClickAction()"
            ></lib-sidebar-item>
        </div>
        <div class="sidebar-container sidebar-container-end">
            <!-- bottom side menu entries -->
            <lib-sidebar-item
                *ngFor="let item of itemsBottom"
                [item]="item"
                [colors]="colors"
                [isOpen]="isOpen"
                (clickAction)="linkClickAction()"
            ></lib-sidebar-item>
        </div>
    `,
    styles: [
        `
            .sidebar-container {
                padding-top: 20px;
            }
        `
    ]
})
export class SidebarContainerComponent {
    @Input() configuration: SimpleSidebarConfiguration;
    @Input() itemsTop: SimpleSidebarItem[];
    @Input() itemsBottom: SimpleSidebarItem[];
    @Input() isOpen: boolean;
    @Input() colors: SimpleSidebarColors;

    @Output() closeDock: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    linkClickAction() {
        if (this.configuration.closeAfterClick) {
            this.closeDock.emit();
        }
    }
}
