import { Component, Input } from '@angular/core';
import { SimpleSidebarService } from './simple-sidebar.service';
import { SimpleSidebarItem } from './models/simple-sidebar-item.model';

@Component({
    selector: 'simple-sidebar',
    template: `
        <div class="ass-menu-button" title="{{title}}" (click)="openSidebar()">
            <i class="fa fa-bars fa-2x"></i>
        </div>
        <div title="">
            <aside class="ass-aside-menu ass-slide-{{slide}}">
                <small *ngIf="this.getCloseState()" class="ass-aside-menu-close" (click)="closeSidebar()">
                    <span *ngIf="!this.getSettingsCloseIcon()">[x]</span>
                    <span *ngIf="this.getSettingsCloseIcon()"><i class="{{this.getSettingsCloseIcon()}}"></i></span>
                </small>
                <h3 class="ass-aside-menu-title" ng-bind="title"></h3>
                <a href="{{item.route}}" target="{{item.target}}" (click)="closeSidebar()" class="ass-aside-menu-item" 
                        *ngFor="let item of items">
                    <i *ngIf="item.icon" class="{{item.icon}} ass-aside-menu-icon"></i>
                    {{item.name}}
                </a>
            </aside>
            <div *ngIf="this.getState()" class="ass-aside-overlay" (click)="closeSidebar()"></div>
        </div>
        
    `,
    styleUrls: ['simple-sidebar.css']
})
export class SimpleSidebarComponent {
    public slide: string;
    public items: Array<SimpleSidebarItem> = [];

    constructor(private simpleSidebarService: SimpleSidebarService) {
        if (this.getState()) {
            this.slide = 'in';
        }
        this.items = this.simpleSidebarService.getItems();
    }

    public openSidebar() {
        this.simpleSidebarService.sidebarState(true);
        this.slide = 'in';
    }

    public closeSidebar() {
        this.simpleSidebarService.sidebarState(false);
        this.slide = 'out';
    }

    public getSettingsCloseIcon() {
        return this.simpleSidebarService.getSettings().closeIcon;
    }

    public getCloseState() {
        return this.simpleSidebarService.getSettings().close;
    }

    public getState() {
        return this.simpleSidebarService.getSettings().state;
    }

}
