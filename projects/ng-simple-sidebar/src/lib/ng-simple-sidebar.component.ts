import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    HostListener,
    AfterContentChecked
} from '@angular/core';
import { map, filter } from 'rxjs/operators';

import { SimpleSidebarItem } from './models/sidebar-item';
import { SimpleSidebarConfiguration } from './models/sidebar-configuration';
import { NgSimpleSidebarService } from './ng-simple-sidebar.service';
import { combineLatest, Subject } from 'rxjs';

const PADDING = 30; // reduce amount because of dock padding
const DEFAULT_WIDTH = '250px';
const DEFAULT_DOCK_WIDTH = '30px';

interface Dimensions {
    innerHeight: number;
    innerWidth: number;
}

@Component({
    selector: 'lib-ng-simple-sidebar',
    templateUrl: './ng-simple-sidebar.component.html',
    styleUrls: ['./ng-simple-sidebar.component.css']
})
export class NgSimpleSidebarComponent
    implements OnChanges, AfterContentChecked {
    @Input() isOpen = false;
    @Input() items: SimpleSidebarItem[] = [];
    @Input() configuration: SimpleSidebarConfiguration;

    configuration$ = this.simpleSidebarService.getConfiguration();
    isOpen$ = this.simpleSidebarService.isOpen();
    itemsTop$ = this.simpleSidebarService.getTopsideItems();
    itemsBottom$ = this.simpleSidebarService.getBotsideItems();

    dimensions$ = new Subject<Dimensions>();

    colors$ = this.configuration$.pipe(
        map(c => {
            return {
                darkMode: c.colors.darkMode,
                fColor: c.colors.darkMode
                    ? c.colors.darkModeFont
                    : c.colors.font,
                bColor: c.colors.darkMode
                    ? c.colors.darkModeBackground
                    : c.colors.background
            };
        })
    );

    sidedbarStyle$ = combineLatest([
        this.configuration$,
        this.colors$,
        this.isOpen$,
        this.dimensions$
    ]).pipe(
        map(r => ({ conf: r[0], colors: r[1], isOpen: r[2], dim: r[3] })),
        filter(ctx => ctx.conf.mobile),
        map(ctx => {
            console.log(ctx);
            return {
                'background-color': ctx.colors.bColor,
                width: ctx.isOpen ? `${ctx.dim.innerWidth}px` : '0',
                height: `${ctx.dim.innerHeight}px`
            };
        })
    );

    dockStyle$ = combineLatest([
        this.configuration$,
        this.colors$,
        this.isOpen$,
        this.dimensions$
    ]).pipe(
        map(r => ({ conf: r[0], colors: r[1], isOpen: r[2], dim: r[3] })),
        map(ctx => {
            return {
                'background-color': ctx.colors.bColor,
                color: ctx.colors.fColor,
                height: ctx.conf.mobile
                    ? DEFAULT_DOCK_WIDTH
                    : `${ctx.dim.innerHeight}px`,
                width: this.calcDockWidth(ctx.conf, ctx.isOpen, ctx.dim),
                position: ctx.conf.mobile ? 'fixed' : ctx.conf.position
            };
        })
    );

    @HostListener('window:resize')
    onResize() {
        this.calculateDimensions();
    }

    constructor(private simpleSidebarService: NgSimpleSidebarService) {
        this.calculateDimensions();
    }

    ngOnChanges(changes: SimpleChanges) {
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
            innerWidth: window.innerWidth - this.getScrollbarWidth() - PADDING
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
