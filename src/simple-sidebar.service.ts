import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleSidebarSettings } from './models/simple-sidebar-settings.model';
import { SimpleSidebarItem } from './models/simple-sidebar-item.model';

@Injectable()
export class SimpleSidebarService {
    private simpleSidebarSettings: SimpleSidebarSettings;
    private simpleSidebarItems: Array<SimpleSidebarItem> = [];

    constructor(private router: Router) { }

    public setSettings(settingsObj) {
        this.simpleSidebarSettings = new SimpleSidebarSettings(settingsObj.state, settingsObj.title,
            settingsObj.close, settingsObj.closeItem);
    }

    public addItem(item) {
        this.simpleSidebarItems.push(new SimpleSidebarItem(
            item.name,
            item.route,
            item.icon,
            item.target
        ));
    }

    public getItems() {
        return this.simpleSidebarItems;
    }

    public sidebarState(val: boolean): void {
        this.simpleSidebarSettings.state = val;
    }

    public getSettings(): SimpleSidebarSettings {
        return this.simpleSidebarSettings;
    }

    public getSidebarItems(): Array<SimpleSidebarItem> {
        return this.simpleSidebarItems;
    }
}
