import { Component } from '@angular/core';

import { SessionListComponent } from '../session-list/session-list.component';
import { SessionDetailComponent } from '../session-detail/session-detail.component';

@Component({
	selector: 'container',
	template:`
	<div class="col-xs-3">
		<button class="btn" href="#createSession">Create a Session</button>
	</div>
	<div class="col-xs-5">
		<session-list></session-list>
	</div>
	<div class="col-xs-4">
		<session-detail></session-detail>
	</div>
	`,
	directives: [SessionListComponent, SessionDetailComponent],
	styles: [`
		session-list {
			display: block;
			border: blue solid 2px;
		}

		session-detail {
			display: block;
			border: green solid 2px;
		}
	`]
})

export class ContainerComponent {

}