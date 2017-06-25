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
/**
 * Simple Sidebar component with the template
 */
export class SimpleSidebarComponent {
    public slide: string;
    public items: Array<SimpleSidebarItem> = [];

    /**
     * Initialize the defaults
     * 
     * @param simpleSidebarService 
     */
    constructor(private simpleSidebarService: SimpleSidebarService) {
        if (this.getState()) {
            this.slide = 'in';
        }
        this.items = this.simpleSidebarService.getItems();
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
