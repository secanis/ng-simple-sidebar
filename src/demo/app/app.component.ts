import { Component } from '@angular/core';

import { SidebarService } from '../../../dist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private sidebarService: SidebarService) {
        this.sidebarService.setSettings({ openCloseButton: true, openCloseButtonIcon: 'fa fa-2x fa-arrows-h' });
        this.sidebarService.addItem({ name: 'Microsoft', icon: 'fa fa-windows', route: 'https://microsoft.com', target: '_blank', position: 'top' });
        this.sidebarService.addItem({ name: 'Google', icon: 'fa fa-google', route: 'https://google.com', target: '_blank', position: 'top' });
        this.sidebarService.addItem({ name: 'Apple', icon: 'fa fa-apple', route: 'https://apple.com', target: '_blank', position: 'top' });
        this.sidebarService.addItem({ name: 'MyAccount', icon: 'fa fa-user', route: '', target: '', position: 'bottom' });
    }
}
