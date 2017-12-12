# ng-simple-sidebar

## Demo

To start the demo application:

	npm install
	npm run demo

After that, you can visit the demo application under `http://localhost:8080`.

## Installation

To install this library, run ([package on npmjs.com](https://www.npmjs.com/package/ng-simple-sidebar)):

	npm install ng-simple-sidebar --save

and then from your angular `AppModule`:

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

Once your library is imported, you can use it in your angular application:

	<!-- You can now use your library component in app.component.html -->
	<div class="navbar">
	    <simple-sidebar></simple-sidebar>
	</div>

And you can set the options from your application:

	import { SimpleSidebarService } from 'ng-simple-sidebar';
	
	export class AppComponent {
	    constructor(private simpleSidebarService: SimpleSidebarService) {
	        // for the icons you Font-Awesome is recommended
	        this.simpleSidebarService.setSettings({close: true, closeItem: 'fa fa-close fa-2x'});
	        this.simpleSidebarService.addItem({name: 'link one', icon: 'fa fa-home', route: '/foo', target: ''});
	        this.simpleSidebarService.addItem({name: 'link two', icon: 'fa fa-gavel', route: '/bar', target: ''});
	    }
	}


## Development

To generate the lib files:

	npm run build


To lint all `*.ts` files:

	npm run lint

To build the demo application incl. the lib:

	npm run demo			// to start the demo
	npm run build-demo		// to build the demo
	

## License and Thanks

MIT © [Matthias Baldi](mailto:matthias.baldi@secanis.ch)

ng-simple-sidebar build process is based on: [https://github.com/cyrilletuzi/angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage) and the blog entry [https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464](https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464)