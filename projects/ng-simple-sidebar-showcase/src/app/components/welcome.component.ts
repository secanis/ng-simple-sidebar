import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SimpleSidebarItem,
    SimpleSidebarConfiguration,
    NgSimpleSidebarService
} from 'projects/ng-simple-sidebar/src/public-api';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styles: [],
    standalone: true,
    imports: [CommonModule],
})
export class WelcomeComponent implements OnInit {
    private ngSimpleSidebarService = inject(NgSimpleSidebarService);

    sidebarItems: SimpleSidebarItem[] = [];
    sidebarConfig$ = this.ngSimpleSidebarService.getConfiguration();
    isOpen$ = this.ngSimpleSidebarService.isOpen();

    ngOnInit() {
        this.sidebarItems = [
            {
                name: 'Welcome',
                icon: 'las la-home',
                routerLink: ['/welcome'],
                position: 'top'
            },
            {
                name: 'About',
                icon: 'las la-address-book',
                routerLink: ['/about'],
                position: 'top'
            },
            {
                name: 'secanis.ch',
                icon: 'las la-external-link-alt',
                url: 'https://secanis.ch',
                target: '_blank',
                position: 'bottom'
            }
        ];
        this.ngSimpleSidebarService.addItems(this.sidebarItems);
    }

    private getConfig(): SimpleSidebarConfiguration {
        const conf = this.sidebarConfig$.getValue();
        if (!conf) {
            throw new Error('Sidebar configuration is not set');
        }
        return conf;
    }

    toggleDarkMode() {
        const conf = this.getConfig();
        conf.colors = conf.colors || {};
        conf.colors.darkMode = !conf.colors.darkMode;
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleCloseAfterClick() {
        const conf = this.getConfig();
        conf.closeAfterClick = !conf.closeAfterClick;
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleSidebarState() {
        if (this.isOpen$.getValue()) {
            this.ngSimpleSidebarService.close();
        } else {
            this.ngSimpleSidebarService.open();
        }
    }

    toggleMenuButtons() {
        const conf = this.getConfig();
        conf.openIcon = conf.openIcon ? undefined : 'las la-bars';
        conf.closeIcon = conf.closeIcon ? undefined : 'las la-times';
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleMobileView() {
        const conf = this.getConfig();
        conf.mobile = !conf.mobile;
        this.ngSimpleSidebarService.configure(conf);
    }
}