# ng-simple-sidebar

An easy library to implement asidebar with a mobile mode to your Angular app.

[![CircleCI](https://circleci.com/gh/secanis/ng-simple-sidebar.svg?style=svg)](https://circleci.com/gh/secanis/ng-simple-sidebar)[![npm version](https://badge.fury.io/js/ng-simple-sidebar.svg)](https://badge.fury.io/js/ng-simple-sidebar)![typescript types](https://badgen.net/npm/types/ng-simple-sidebar)![npm license](https://badgen.net/npm/license/ng-simple-sidebar)

[![NPM](https://nodei.co/npm/ng-simple-sidebar.png?compact=true)](https://nodei.co/npm/ng-simple-sidebar/)

## Demo

A demo showcase app is available under the following url to click around an test the library.

[https://secanis.github.io/ng-simple-sidebar/](https://secanis.github.io/ng-simple-sidebar/)

## Installation and Setup

To install this library, run ([package on npmjs.com](https://www.npmjs.com/package/ng-simple-sidebar)):

	npm install ng-simple-sidebar --save

and then from your angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SimpleSidebar } from 'ng-simple-sidebar';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SimpleSidebar,
		BrowserModule,

		// Specify your library as an import
		NgSimpleSidebarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it in your angular application:

```html
<!-- You can now use your library component in app.component.html -->
<div class="content-wrapper">
	<simple-sidebar></simple-sidebar>
	<div class="content"></div>
</div>
```

CSS for the basic structure

```css
html, body {
    margin: 0;
    padding: 0;
}

.content-wrapper {
	display: flex;
	flex-wrap: nowrap;
}

.content {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 20px;
}
```



And you can set the options from your application:

```typescript
import { Component, OnInit } from '@angular/core';
import { NgSimpleSidebarService } from 'ng-simple-sidebar';

export class AppComponent implements OnInit {
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
        // required, configure items
        this.ngSimpleSidebarService.addItems(this.sidebarItems);

        // required, configure icons
        this.ngSimpleSidebarService.configure(
            openIcon: 'las la-bars',
        	closeIcon: 'las la-times',
		);

        // optional, configuration and set states
         this.ngSimpleSidebarService.open();
         this.ngSimpleSidebarService.close();

        // optional, access states
        sidebarConfig$ = this.ngSimpleSidebarService.getConfiguration();
	    isOpen$ = this.ngSimpleSidebarService.isOpen();
        getTopsideItems$ = this.ngSimpleSidebarService.getTopsideItems();
        getBotsideItems$ = this.ngSimpleSidebarService.getBotsideItems();
    }
}
```


## Development

To generate prod builds:

```shell
npm run build:lib
npm run build:showcase
```

To build the demo application incl. the lib:

```shell
npm run build:watch 	// start development server for the library
npm run start   		// start demo showcase application
```

After that, you can visit the demo application under `http://localhost:4200`.


## License

MIT © [secanis.ch](mailto:support@secanis.ch)
