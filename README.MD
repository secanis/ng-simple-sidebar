# ng-simple-sidebar

## Demo

**is coming soon**

## Installation

To install this library, run:

```bash
$ npm install ng-simple-sidebar --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng-simple-sidebar
```

and then from your Angular `AppModule`:

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

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<div class="navbar">
    <simple-sidebar></simple-sidebar>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Matthias Baldi](mailto:matthias.baldi@secanis.ch)
