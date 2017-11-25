import { Injectable } from '@angular/core';

import { SimpleSidebarSettings } from './models/ng-simple-sidebar-settings.model';
import { SimpleSidebarItem } from './models/ng-simple-sidebar-item.model';

/**
 * Sidebar service: it returns configured settings and the actual state of the sidebar
 */
@Injectable()
export class SimpleSidebarService {
    private simpleSidebarSettings: SimpleSidebarSettings;
    private simpleSidebarItems: Array<SimpleSidebarItem> = [];

    constructor( ) { }

    /**
     * Set your custom settings for the sidebar
     *
     * @param settingsObj
     */
    public setSettings(settingsObj: any): void {
        this.simpleSidebarSettings = new SimpleSidebarSettings(settingsObj.state, settingsObj.title,
            settingsObj.close, settingsObj.closeItem, settingsObj.docked);
    }

    /**
     * Add an item to the sidebar array
     *
     * @param item
     */
    public addItem(item: SimpleSidebarItem): void {
        this.simpleSidebarItems.push(new SimpleSidebarItem(
            item.name,
            item.route,
            item.icon,
            item.target,
            item.position
        ));
    }

    /**
     * Returns all items to create the sidebar list
     */
    public getItems(): Array<SimpleSidebarItem> {
        return this.simpleSidebarItems;
    }

    /**
     * Set's the actual sidebar state
     *
     * @param val
     */
    public sidebarState(val: boolean): void {
        this.simpleSidebarSettings.state = val;
    }

    /**
     * Returns the configured settings object
     */
    public getSettings(): SimpleSidebarSettings {
        return this.simpleSidebarSettings;
    }
}
