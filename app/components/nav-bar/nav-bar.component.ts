import { Component } from '@angular/core';

import { LocationBarComponent } from '../location-bar/location-bar.component';

@Component({
	selector: 'nav-bar',
	templateUrl: 'app/components/nav-bar/nav-bar.component.html',
	styleUrls:['app/components/nav-bar/nav-bar.component.css'],
	directives: [LocationBarComponent]
})

export class NavBarComponent {

}