import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContainerComponent } from './components/container/container.component';

@Component({
	selector: 'my-app',
	template: `
	<nav-bar></nav-bar>
	<container></container>
	`,
	directives: [ROUTER_DIRECTIVES, NavBarComponent, ContainerComponent],
	providers: [ROUTER_PROVIDERS],
	styles: [`
		container {
			display: inline-block;
			width: 100%;
			height: 500px;
			border: orange solid 2px;
			margin-top: 20px;
		}
	`]
})

export class AppComponent {
	title = 'Chilesoup';
}
