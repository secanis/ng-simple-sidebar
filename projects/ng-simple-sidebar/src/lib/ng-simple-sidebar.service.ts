import { Injectable } from '@angular/core';

import {
    SimpleSidebarConfiguration,
    SimpleSidebarColors
} from './models/sidebar-configuration';
import {
    SimpleSidebarItem,
    SimpleSidebarPosition
} from './models/sidebar-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NgSimpleSidebarService {
    private _stateChange$ = new BehaviorSubject<boolean>(false);
    private _configuration$ = new BehaviorSubject<SimpleSidebarConfiguration>(
        null
    );
    private _itemsTop$ = new BehaviorSubject<SimpleSidebarItem[]>([]);
    private _itemsBottom$ = new BehaviorSubject<SimpleSidebarItem[]>([]);

    open() {
        this._stateChange$.next(true);
    }

    close() {
        this._stateChange$.next(false);
    }

    isOpen(): BehaviorSubject<boolean> {
        return this._stateChange$;
    }

    configure(configuration: SimpleSidebarConfiguration) {
        this._configuration$.next(this.setConfigDefaults(configuration));
    }

    getConfiguration(): BehaviorSubject<SimpleSidebarConfiguration> {
        return this._configuration$;
    }

    addItems(items: SimpleSidebarItem[]) {
        this._itemsBottom$.next(
            items.filter(i => i.position === SimpleSidebarPosition.bottom)
        );
        this._itemsTop$.next(
            items.filter(i => i.position === SimpleSidebarPosition.top)
        );
    }

    getTopsideItems(): BehaviorSubject<SimpleSidebarItem[]> {
        return this._itemsTop$;
    }

    getBotsideItems(): BehaviorSubject<SimpleSidebarItem[]> {
        return this._itemsBottom$;
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
            position: configuration.position || 'sticky'
        };
    }

    private setColorDefaults(colors: SimpleSidebarColors): SimpleSidebarColors {
        return {
            darkMode: colors.darkMode || false,
            background: colors.background || '#eee',
            font: colors.font || '#000',
            darkModeBackground: '#333',
            darkModeFont: '#fff'
        };
    }
}
