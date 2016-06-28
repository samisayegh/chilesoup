import { Component } from '@angular/core';

import { LocationBarComponent } from '../location-bar/location-bar.component';

@Component({
	selector: 'nav-bar',
	template:`
	<nav>
		<div class="navbar-brand col-xs-3">chilesoup</div>
		<location-bar class="col-xs-3"></location-bar>
		<a href="/faq" class="col-xs-3">FAQ</a>
		<a href="/login" class="col-xs-3">Login</a>
	</nav>
	`,
	styles:[`
		nav {
			border: red solid 2px;
			height: 50px;
		}
	`],
	directives: [LocationBarComponent]
})

export class NavBarComponent {

}