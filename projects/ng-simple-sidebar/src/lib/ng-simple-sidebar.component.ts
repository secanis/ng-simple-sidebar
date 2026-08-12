import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    HostListener,
    AfterContentChecked,
    inject,
} from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { SimpleSidebarItem } from './models/sidebar-item';
import { SimpleSidebarConfiguration } from './models/sidebar-configuration';
import { NgSimpleSidebarService } from './ng-simple-sidebar.service';
import { combineLatest, Subject } from 'rxjs';
import { SidebarContainerComponent } from './components/sidebar-container.component';

const PADDING = 30;
const DEFAULT_WIDTH = '250px';
const DEFAULT_DOCK_WIDTH = '30px';

interface Dimensions {
    innerHeight: number;
    innerWidth: number;
}

@Component({
    selector: 'lib-ng-simple-sidebar',
    templateUrl: './ng-simple-sidebar.component.html',
    styleUrls: ['./ng-simple-sidebar.component.css'],
    standalone: true,
    imports: [CommonModule, SidebarContainerComponent],
})
export class NgSimpleSidebarComponent
    implements OnChanges, AfterContentChecked {
    @Input() isOpen = false;
    @Input() items: SimpleSidebarItem[] = [];
    @Input() configuration?: SimpleSidebarConfiguration;

    private simpleSidebarService = inject(NgSimpleSidebarService);

    configuration$ = this.simpleSidebarService.getConfiguration();
    isOpen$ = this.simpleSidebarService.isOpen();
    itemsTop$ = this.simpleSidebarService.getTopsideItems();
    itemsBottom$ = this.simpleSidebarService.getBotsideItems();

    dimensions$ = new Subject<Dimensions>();

    colors$ = this.configuration$.pipe(
        map((c) => {
            if (!c || !c.colors) {
                return {
                    darkMode: false,
                    fColor: '#000',
                    bColor: '#eee',
                };
            }
            return {
                darkMode: c.colors.darkMode || false,
                fColor: c.colors.darkMode
                    ? c.colors.darkModeFont || '#fff'
                    : c.colors.font || '#000',
                bColor: c.colors.darkMode
                    ? c.colors.darkModeBackground || '#333'
                    : c.colors.background || '#eee',
            };
        })
    );

    sidedbarStyle$ = combineLatest([
        this.configuration$,
        this.colors$,
        this.isOpen$,
        this.dimensions$,
    ]).pipe(
        map((r) => ({ conf: r[0], colors: r[1], isOpen: r[2], dim: r[3] })),
        filter((ctx): ctx is { conf: SimpleSidebarConfiguration; colors: { darkMode: boolean; fColor: string; bColor: string }; isOpen: boolean; dim: Dimensions } => !!ctx.conf?.mobile),
        map((ctx) => {
            return {
                'background-color': ctx.colors.bColor,
                width: ctx.isOpen ? `${ctx.dim.innerWidth}px` : '0',
                height: `${ctx.dim.innerHeight}px`,
            };
        })
    );

    dockStyle$ = combineLatest([
        this.configuration$,
        this.colors$,
        this.isOpen$,
        this.dimensions$,
    ]).pipe(
        map((r) => ({ conf: r[0], colors: r[1], isOpen: r[2], dim: r[3] })),
        map((ctx) => {
            const conf = ctx.conf;
            if (!conf) {
                return {};
            }
            return {
                'background-color': ctx.colors.bColor,
                color: ctx.colors.fColor,
                height: conf.mobile
                    ? DEFAULT_DOCK_WIDTH
                    : `${ctx.dim.innerHeight}px`,
                width: this.calcDockWidth(conf, ctx.isOpen, ctx.dim),
                position: conf.mobile ? 'fixed' : conf.position,
            };
        })
    );

    @HostListener('window:resize')
    onResize() {
        this.calculateDimensions();
    }

    constructor() {
        this.calculateDimensions();
    }

    ngOnChanges(changes: SimpleChanges) {
        const isOpenChange = changes['isOpen'];
        if (isOpenChange && isOpenChange.hasOwnProperty('currentValue')) {
            if (isOpenChange.currentValue) {
                this.simpleSidebarService.close();
            } else {
                this.simpleSidebarService.open();
            }
        }

        const itemsChange = changes['items'];
        if (itemsChange && itemsChange.currentValue) {
            this.simpleSidebarService.addItems(itemsChange.currentValue);
        }

        const configChange = changes['configuration'];
        if (configChange && configChange.currentValue) {
            this.simpleSidebarService.configure(
                configChange.currentValue
            );
        }
    }

    ngAfterContentChecked() {
        this.calculateDimensions();
    }

    openSidebar() {
        this.simpleSidebarService.open();
    }

    closeSidebar() {
        this.simpleSidebarService.close();
    }

    private calculateDimensions() {
        this.dimensions$.next({
            innerHeight: window.innerHeight - PADDING,
            innerWidth: window.innerWidth - this.getScrollbarWidth() - PADDING,
        });
    }

    private getScrollbarWidth(): number {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    private calcDockWidth(
        conf: SimpleSidebarConfiguration,
        isOpen: boolean,
        dim: Dimensions
    ): string {
        if (isOpen && !conf.mobile) {
            return DEFAULT_WIDTH;
        }

        if (conf.mobile) {
            return `${dim.innerWidth}px`;
        } else {
            return DEFAULT_DOCK_WIDTH;
        }
    }
}