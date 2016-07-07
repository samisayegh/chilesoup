import { Component } from '@angular/core';

@Component({
	selector:'location-bar',
	template:`
	<div class="input-group">
		<div class="input-group-addon">Loc</div>
		<input class="form-control" type="text" placeholder="e.g. Montreal">
	</div>
	`,
	styleUrls:['app/components/location-bar/location-bar.component.css']
})

export class LocationBarComponent {
	
}