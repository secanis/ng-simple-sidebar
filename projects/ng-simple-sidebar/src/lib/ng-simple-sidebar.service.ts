import { Injectable } from '@angular/core';

import {
    SimpleSidebarConfiguration,
    SimpleSidebarColors,
} from './models/sidebar-configuration';
import {
    SimpleSidebarItem,
    SimpleSidebarPosition,
} from './models/sidebar-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NgSimpleSidebarService {
    private STATE_CHANGE$ = new BehaviorSubject<boolean>(false);
    private CONFIGURATION$ = new BehaviorSubject<SimpleSidebarConfiguration>(
        null
    );
    private ITEMS_TOP$ = new BehaviorSubject<SimpleSidebarItem[]>([]);
    private ITEMS_BOTTOM$ = new BehaviorSubject<SimpleSidebarItem[]>([]);

    open() {
        this.STATE_CHANGE$.next(true);
    }

    close() {
        this.STATE_CHANGE$.next(false);
    }

    isOpen(): BehaviorSubject<boolean> {
        return this.STATE_CHANGE$;
    }

    configure(configuration: SimpleSidebarConfiguration) {
        this.CONFIGURATION$.next(this.setConfigDefaults(configuration));
    }

    getConfiguration(): BehaviorSubject<SimpleSidebarConfiguration> {
        return this.CONFIGURATION$;
    }

    addItems(items: SimpleSidebarItem[]) {
        this.ITEMS_BOTTOM$.next(
            items.filter((i) => i.position === SimpleSidebarPosition.bottom)
        );
        this.ITEMS_TOP$.next(
            items.filter((i) => i.position === SimpleSidebarPosition.top)
        );
    }

    getTopsideItems(): BehaviorSubject<SimpleSidebarItem[]> {
        return this.ITEMS_TOP$;
    }

    getBotsideItems(): BehaviorSubject<SimpleSidebarItem[]> {
        return this.ITEMS_BOTTOM$;
    }

    private setConfigDefaults(
        configuration: SimpleSidebarConfiguration
    ): SimpleSidebarConfiguration {
        return {
            openIcon: configuration.openIcon,
            closeIcon: configuration.closeIcon,
            colors: this.setColorDefaults(
                configuration.colors || ({} as SimpleSidebarColors)
            ),
            closeAfterClick: configuration.hasOwnProperty('closeAfterClick')
                ? configuration.closeAfterClick
                : true,
            mobile: configuration.hasOwnProperty('mobile')
                ? configuration.mobile
                : false,
            position: configuration.position || 'sticky',
            mobileTitle: configuration.mobileTitle || null,
        };
    }

    private setColorDefaults(colors: SimpleSidebarColors): SimpleSidebarColors {
        return {
            darkMode: colors.darkMode || false,
            background: colors.background || '#eee',
            font: colors.font || '#000',
            darkModeBackground: '#333',
            darkModeFont: '#fff',
        };
    }
}
