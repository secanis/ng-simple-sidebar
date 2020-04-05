import { Component, OnInit } from '@angular/core';
import {
    SimpleSidebarItem,
    NgSimpleSidebarService
} from 'projects/ng-simple-sidebar/src/public-api';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styles: []
})
export class WelcomeComponent implements OnInit {
    sidebarItems: SimpleSidebarItem[];
    sidebarConfig$ = this.ngSimpleSidebarService.getConfiguration();
    isOpen$ = this.ngSimpleSidebarService.isOpen();

    constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {}

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

    toggleDarkMode() {
        const conf = this.sidebarConfig$.getValue();
        conf.colors.darkMode = !conf.colors.darkMode;
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleCloseAfterClick() {
        const conf = this.sidebarConfig$.getValue();
        conf.closeAfterClick = !conf.closeAfterClick;
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleSidebarState() {
        this.isOpen$.getValue()
            ? this.ngSimpleSidebarService.close()
            : this.ngSimpleSidebarService.open();
    }

    toggleMenuButtons() {
        const conf = this.sidebarConfig$.getValue();
        conf.openIcon = conf.openIcon ? null : 'las la-bars';
        conf.closeIcon = conf.closeIcon ? null : 'las la-times';
        this.ngSimpleSidebarService.configure(conf);
    }

    toggleMobileView() {
        const conf = this.sidebarConfig$.getValue();
        conf.mobile = !conf.mobile;
        this.ngSimpleSidebarService.configure(conf);
    }
}
