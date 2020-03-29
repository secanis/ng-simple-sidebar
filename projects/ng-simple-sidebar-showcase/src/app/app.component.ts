import { Component } from '@angular/core';
import {
    SimpleSidebarItem,
    SimpleSidebarConfiguration,
    NgSimpleSidebarService
} from 'projects/ng-simple-sidebar/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidebarItems: SimpleSidebarItem[];
    sidebarConfig: SimpleSidebarConfiguration = {
        openIcon: 'las la-bars',
        closeIcon: 'las la-times',
        colors: {
            darkMode: false
        }
    };
    isOpen = false;

    constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {
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
        this.ngSimpleSidebarService.configure(this.sidebarConfig);
    }
}
