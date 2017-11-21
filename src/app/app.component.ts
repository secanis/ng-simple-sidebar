import { Component, OnInit } from '@angular/core';

import { SimpleSidebarComponent } from '../component/simple-sidebar.component';
import { SimpleSidebarService } from '../component/simple-sidebar.service';

import '../style/style.css';

@Component({
  selector: 'webmon-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private simpleSidebarService: SimpleSidebarService) {
        this.simpleSidebarService.setSettings({close: true, closeItem: 'fa fa-close fa-2x', title: "yey", docked: true});
        this.simpleSidebarService.addItem({ name: 'Microsoft', icon: 'fa fa-windows', route: 'https://microsoft.com', target: '_blank', position: 'top'});
        this.simpleSidebarService.addItem({ name: 'Google', icon: 'fa fa-google', route: 'https://google.com', target: '_blank', position: 'top'});
        this.simpleSidebarService.addItem({name: 'Apple', icon: 'fa fa-apple', route: 'https://apple.com', target: '_blank', position: 'top'});
        this.simpleSidebarService.addItem({name: 'MyAccount', icon: 'fa fa-user', route: '', target: '', position: 'bottom'});
    }

    ngOnInit() {

    }
}
