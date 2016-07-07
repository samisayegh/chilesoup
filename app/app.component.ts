import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
	selector: 'my-app',
	template: `
	<nav-bar></nav-bar>
	<a [routerLink]="['']"></a>
	<a [routerLink]="['/faq']"></a>
	<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES, NavBarComponent],
	providers: [],
	styles: []
})

export class AppComponent {
	title = 'Chilesoup';
}
