import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
    SimpleSidebarItem,
    SimpleSidebarConfiguration,
    NgSimpleSidebarService,
} from 'projects/ng-simple-sidebar/src/public-api';
import { NgSimpleSidebarComponent } from 'projects/ng-simple-sidebar/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, RouterOutlet, NgSimpleSidebarComponent],
})
export class AppComponent {
    private defaultSidebarItems: SimpleSidebarItem[];
    private defaultSidebarConfig: SimpleSidebarConfiguration = {
        openIcon: 'las la-bars',
        closeIcon: 'las la-times',
        colors: {
            darkMode: false,
        },
        mobileTitle: 'I am a mobile title',
    };

    private ngSimpleSidebarService = inject(NgSimpleSidebarService);

    isOpen = false;
    configState$ = this.ngSimpleSidebarService.getConfiguration();

    constructor() {
        this.defaultSidebarItems = [
            {
                name: 'Welcome',
                icon: 'las la-home',
                routerLink: ['/welcome'],
                position: 'top',
            },
            {
                name: 'About',
                icon: 'las la-address-book',
                routerLink: ['/about'],
                position: 'top',
            },
            {
                name: 'secanis.ch',
                icon: 'las la-external-link-alt',
                url: 'https://secanis.ch',
                target: '_blank',
                position: 'bottom',
            },
        ];
        this.ngSimpleSidebarService.addItems(this.defaultSidebarItems);
        this.ngSimpleSidebarService.configure(this.defaultSidebarConfig);
    }
}