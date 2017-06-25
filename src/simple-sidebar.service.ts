import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleSidebarSettings } from './models/simple-sidebar-settings.model';
import { SimpleSidebarItem } from './models/simple-sidebar-item.model';

/**
 * Sidebar service: it returns configured settings and the actual state of the sidebar
 */
@Injectable()
export class SimpleSidebarService {
    private simpleSidebarSettings: SimpleSidebarSettings;
    private simpleSidebarItems: Array<SimpleSidebarItem> = [];

    constructor(private router: Router) { }

    /**
     * Set your custom settings for the sidebar
     * 
     * @param settingsObj
     */
    public setSettings(settingsObj): void {
        this.simpleSidebarSettings = new SimpleSidebarSettings(settingsObj.state, settingsObj.title,
            settingsObj.close, settingsObj.closeItem);
    }

    /**
     * Add an item to the sidebar array
     * 
     * @param item 
     */
    public addItem(item): void {
        this.simpleSidebarItems.push(new SimpleSidebarItem(
            item.name,
            item.route,
            item.icon,
            item.target
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
