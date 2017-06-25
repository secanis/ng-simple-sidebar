# ng-simple-sidebar

## Demo

**is coming soon**

## Installation

To install this library, run:

```bash
$ npm install ng-simple-sidebar --save
```

and then from your angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SimpleSidebar, SimpleSidebarService } from 'ng-simple-sidebar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SimpleSidebar,
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [SimpleSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it in your angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<div class="navbar">
    <simple-sidebar></simple-sidebar>
</div>
```

```js
import { SimpleSidebarService } from 'ng-simple-sidebar';

export class AppComponent {
    constructor(private simpleSidebarService: SimpleSidebarService) {
        // for the icons you can use FontAwesome or every other font library you want.
        this.simpleSidebarService.setSettings({close: true, closeItem: 'fa fa-close fa-2x'});
        this.simpleSidebarService.addItem({name: 'link one', icon: 'fa fa-home', route: '/foo', target: ''});
        this.simpleSidebarService.addItem({name: 'link two', icon: 'fa fa-gavel', route: '/bar', target: ''});
    }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
npm run build
```

To lint all `*.ts` files:

```bash
npm run lint
```

## License and Thanks

MIT © [Matthias Baldi](mailto:matthias.baldi@secanis.ch)

ng-simple-sidebar is powerd by [https://github.com/jvandemo/generator-angular2-library](https://github.com/jvandemo/generator-angular2-library)
