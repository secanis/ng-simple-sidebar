import { Component } from '@angular/core';
import { SimpleSidebarService } from './ng-simple-sidebar.service';
import { SimpleSidebarItem } from './models/ng-simple-sidebar-item.model';

@Component({
    selector: 'simple-sidebar',
    template: `
        <div class="ass-menu-button" (click)="openSidebar()">
            <i class="fa fa-bars fa-2x"></i>
        </div>
        <div>
            <aside class="ass-aside-menu ass-slide-{{slide}}">
                <small *ngIf="this.getCloseState()" class="ass-aside-menu-close" (click)="closeSidebar()">
                    <span *ngIf="!this.getSettingsCloseIcon()">[x]</span>
                    <span *ngIf="this.getSettingsCloseIcon()"><i class="{{this.getSettingsCloseIcon()}}"></i></span>
                </small>
                <h3 class="ass-aside-menu-title">{{this.simpleSidebarService.getSettings().title}}</h3>
                <div class="ass-aside-menu-wrapper">
                    <div class="ass-aside-container">
                        <a href="{{item.route}}" target="{{item.target}}" (click)="closeSidebar()" class="ass-aside-menu-item"
                                *ngFor="let item of itemsTop">
                            <i *ngIf="item.icon" class="{{item.icon}} ass-aside-menu-icon"></i>
                            {{item.name}}
                        </a>
                    </div>
                    <div class="ass-aside-container ass-aside-container-end">
                        <a href="{{item.route}}" target="{{item.target}}" (click)="closeSidebar()" class="ass-aside-menu-item"
                                *ngFor="let item of itemsBottom">
                            <i *ngIf="item.icon" class="{{item.icon}} ass-aside-menu-icon"></i>
                            {{item.name}}
                        </a>
                    </div>
                </div>
            </aside>
            <aside *ngIf="this.simpleSidebarService.getSettings().docked"
                    class="ass-aside-dock">
                <div class="ass-aside-container">
                    <span class="ass-aside-dock-expand-icon" (click)="openSidebar()">
                        <i class="fa fa-bars fa-2x"></i>
                    </span>
                    <a href="{{item.route}}" target="{{item.target}}" (click)="closeSidebar()" class="ass-aside-menu-item"
                            *ngFor="let item of itemsTop" title="{{item.name}}">
                        <i *ngIf="item.icon" class="{{item.icon}} fa-2x ass-aside-menu-icon"></i>
                    </a>
                </div>
                <div class="ass-aside-container ass-aside-container-end">
                    <a href="{{item.route}}" target="{{item.target}}" (click)="closeSidebar()" class="ass-aside-menu-item"
                            *ngFor="let item of itemsBottom" title="{{item.name}}">
                        <i *ngIf="item.icon" class="{{item.icon}} fa-2x ass-aside-menu-icon"></i>
                    </a>
                </div>
            </aside>
            <div *ngIf="this.getState() && !this.simpleSidebarService.getSettings().docked" class="ass-aside-overlay"
                    (click)="closeSidebar()"></div>
        </div>
    `,
    styleUrls: ['./ng-simple-sidebar.css']
})
/**
 * Simple Sidebar component with the template
 */
export class SimpleSidebarComponent {
    public slide: string;
    public itemsTop: Array<SimpleSidebarItem> = [];
    public itemsBottom: Array<SimpleSidebarItem> = [];

    /**
     * Initialize the defaults
     *
     * @param simpleSidebarService
     */
    constructor(private simpleSidebarService: SimpleSidebarService) {
        if (this.getState()) {
            this.slide = 'in';
        }
        let items = this.simpleSidebarService.getItems();
        items.forEach((i) => {
            if (i.position === 'top') {
                this.itemsTop.push(i);
            } else {
                this.itemsBottom.push(i);
            }
        });
    }

    /**
     * Open the sidebar an show slide effect
     */
    public openSidebar(): void {
        this.simpleSidebarService.sidebarState(true);
        this.slide = 'in';
    }

    /**
     * Close the sidebar an show slide effect
     */
    public closeSidebar(): void {
        this.simpleSidebarService.sidebarState(false);
        this.slide = 'out';
    }

    /**
     * Get the close icon from the settings
     */
    public getSettingsCloseIcon(): string {
        return this.simpleSidebarService.getSettings().closeIcon;
    }

    /**
     * Get close state of the sidebar
     */
    public getCloseState(): boolean {
        return this.simpleSidebarService.getSettings().close;
    }

    /**
     * Get the sidebar state
     */
    public getState(): boolean {
        return this.simpleSidebarService.getSettings().state;
    }

}
