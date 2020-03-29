import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SimpleSidebarItem } from './models/sidebar-item';
import { SimpleSidebarConfiguration } from './models/sidebar-configuration';
import { NgSimpleSidebarService } from './ng-simple-sidebar.service';

@Component({
    selector: 'lib-ng-simple-sidebar',
    templateUrl: './ng-simple-sidebar.component.html',
    styleUrls: ['./ng-simple-sidebar.component.css']
})
export class NgSimpleSidebarComponent implements OnChanges {
    @Input() isOpen = false;
    @Input() items: SimpleSidebarItem[] = [];
    @Input() configuration: SimpleSidebarConfiguration;

    configuration$ = this.simpleSidebarService.getConfiguration();
    isOpen$ = this.simpleSidebarService.isOpen();
    itemsTop$ = this.simpleSidebarService.getTopsideItems();
    itemsBottom$ = this.simpleSidebarService.getBotsideItems();

    constructor(private simpleSidebarService: NgSimpleSidebarService) {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes.isOpen && changes.isOpen.hasOwnProperty('currentValue')) {
            changes.isOpen.currentValue
                ? this.simpleSidebarService.close()
                : this.simpleSidebarService.open();
        }

        if (changes.items && changes.items.currentValue) {
            this.simpleSidebarService.addItems(changes.items.currentValue);
        }

        if (changes.configuration && changes.configuration.currentValue) {
            this.simpleSidebarService.configure(
                changes.configuration.currentValue
            );
        }
    }

    getColors() {
        const c: SimpleSidebarConfiguration = this.configuration$.getValue();
        return {
            darkMode: c.colors.darkMode,
            fColor: c.colors.darkMode ? c.colors.darkModeFont : c.colors.font,
            bColor: c.colors.darkMode
                ? c.colors.darkModeBackground
                : c.colors.background
        };
    }

    linkClickAction() {
        if (this.configuration$.getValue().closeAfterClick) {
            this.simpleSidebarService.close();
        }
    }

    openSidebar() {
        this.simpleSidebarService.open();
    }

    closeSidebar() {
        this.simpleSidebarService.close();
    }
}
