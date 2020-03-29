import { Component, OnInit } from '@angular/core';
import {
    SimpleSidebarItem,
    NgSimpleSidebarService
} from 'projects/ng-simple-sidebar/src/public-api';

@Component({
    selector: 'app-welcome',
    template: `
        <h1>Demo ng-simple-sidebar</h1>
        <div class="button-grp">
            <button class="btn btn-primary" (click)="toggleDarkMode()">
                Toggle DarkMode
            </button>
            <button class="btn btn-primary" (click)="toggleCloseAfterClick()">
                Toggle CloseAfterClick
            </button>
            <button class="btn btn-primary" (click)="toggleSidebarState()">
                Toggle State
            </button>
        </div>
        <div class="button-grp">
            <button class="btn btn-primary" (click)="toggleMenuButtons()">
                Usage without Menu Button
            </button>
        </div>
        <hr />
        <pre>{{ sidebarConfig$ | async | json }}</pre>
        <h2>Usage</h2>
        <section class="docs-methods">
            <article>
                <b>Include Lib in Module</b>
                <pre>
...
import &#x7B; NgSimpleSidebarModule &#x7D; from &#x26;#x27;ng-simple-sidebar&#x26;#x27;;

@NgModule(&#x7B;
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NgSimpleSidebarModule],
    providers: [],
    bootstrap: [AppComponent]
&#x7D;)
export class AppModule &#x7B;&#x7D;
</pre
                >
            </article>
            <article>
                <b>Include Lib in Component</b>
                <pre>
...
constructor(private ngSimpleSidebarService: NgSimpleSidebarService) &#x7B;
    this.ngSimpleSidebarService.addItems(this.sidebarItems);
    this.ngSimpleSidebarService.configure(this.sidebarConfig);
&#x7D;
...

</pre
                >
            </article>
        </section>
        <section class="docs-methods">
            <article>
                <b>Setter: Methods to set States</b>
                <pre>
open()
close()
configure(configuration: SimpleSidebarConfiguration)
addItems(items: SimpleSidebarItem[])
                </pre
                >
            </article>
            <article>
                <b>Getter: All Methods are returning a BehaviorSubject</b>
                <pre>
isOpen(): BehaviorSubject&#x3C;boolean&#x3E;
getConfiguration(): BehaviorSubject&#x3C;SimpleSidebarConfiguration&#x3E;
getTopsideItems(): BehaviorSubject&#x3C;SimpleSidebarItem[]&#x3E;
getBotsideItems(): BehaviorSubject&#x3C;SimpleSidebarItem[]&#x3E;
                </pre
                >
            </article>
        </section>
    `,
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
}
