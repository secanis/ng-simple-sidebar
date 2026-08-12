import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SimpleSidebarItem } from '../models/sidebar-item';
import { SimpleSidebarAbstractColors, SimpleSidebarConfiguration } from '../models/sidebar-configuration';
import { SidebarItemComponent } from './sidebar-item.component';

@Component({
    selector: 'lib-sidebar-container',
    template: `
        <div class="sidebar-container">
            <!-- top side menu entries -->
            @for (item of itemsTop; track item.name) {
                <lib-sidebar-item
                    [item]="item"
                    [colors]="colors"
                    [isOpen]="isOpen"
                    (clickAction)="linkClickAction()"
                ></lib-sidebar-item>
            }
        </div>
        <div class="sidebar-container sidebar-container-end">
            <!-- bottom side menu entries -->
            @for (item of itemsBottom; track item.name) {
                <lib-sidebar-item
                    [item]="item"
                    [colors]="colors"
                    [isOpen]="isOpen"
                    (clickAction)="linkClickAction()"
                ></lib-sidebar-item>
            }
        </div>
    `,
    styles: [
        `
            .sidebar-container {
                padding-top: 20px;
            }
        `
    ],
    standalone: true,
    imports: [SidebarItemComponent],
})
export class SidebarContainerComponent {
    @Input() configuration!: SimpleSidebarConfiguration;
    @Input() itemsTop: SimpleSidebarItem[] = [];
    @Input() itemsBottom: SimpleSidebarItem[] = [];
    @Input() isOpen = false;
    @Input() colors!: SimpleSidebarAbstractColors;

    @Output() closeDock: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    linkClickAction() {
        if (this.configuration.closeAfterClick) {
            this.closeDock.emit();
        }
    }
}