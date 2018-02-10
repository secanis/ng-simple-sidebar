import { Component } from '@angular/core';

import { SidebarService } from '../service/sidebar.service';

@Component({
    selector: 'simple-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    public itemsTop: Array<any> = [];
    public itemsBottom: Array<any> = [];

    /**
     * Initialize the defaults
     *
     * @param sidebarService
     */
    constructor(private sidebarService: SidebarService) {
        let items = this.sidebarService.getItems();
        items.forEach((i) => {
            if (i.position === 'top') {
                this.itemsTop.push(i);
            } else {
                this.itemsBottom.push(i);
            }
        });
    }

    /**
     * Open the sidebar an show slide effect
     */
    public openSidebar(): void {
        this.sidebarService.sidebarState(true);
    }

    /**
     * Close the sidebar an show slide effect
     */
    public closeSidebar(): void {
        this.sidebarService.sidebarState(false);
    }

    /**
     * Get the close icon from the settings
     */
    public getSettingsCloseIcon(): string {
        return this.sidebarService.getSettings().openCloseButtonIcon;
    }

    /**
     * Get the sidebar state
     */
    public getState(): boolean {
        return this.sidebarService.getSettings().state;
    }
}
