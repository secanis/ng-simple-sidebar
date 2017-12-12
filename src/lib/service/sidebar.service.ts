import { Injectable } from '@angular/core';

import { SidebarSettings } from '../models/settings';
import { SidebarItem } from '../models/item';

@Injectable()
export class SidebarService {
    private sidebarSettings: SidebarSettings;
    private sidebarItems: Array<SidebarItem> = [];

    /**
     * Set your custom settings for the sidebar
     *
     * @param settingsObj
     */
    public setSettings(settingsObj: any): void {
        this.sidebarSettings = new SidebarSettings(settingsObj.state, settingsObj.title,
            settingsObj.close, settingsObj.closeItem, settingsObj.docked);
    }

    /**
     * Add an item to the sidebar array
     *
     * @param item
     */
    public addItem(item: any): void {
        this.sidebarItems.push(new SidebarItem(
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
    public getItems(): Array<SidebarItem> {
        return this.sidebarItems;
    }

    /**
     * Set's the actual sidebar state
     *
     * @param val
     */
    public sidebarState(val: boolean): void {
        this.sidebarSettings.state = val;
    }

    /**
     * Returns the configured settings object
     */
    public getSettings(): SidebarSettings {
        return this.sidebarSettings;
    }
}
