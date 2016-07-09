import { Component } from '@angular/core';

import { SessionListComponent } from '../session-list/session-list.component';
import { SessionDetailComponent } from '../session-detail/session-detail.component';

@Component({
	selector: 'container',
	directives: [SessionListComponent, SessionDetailComponent],
	templateUrl: 'app/components/container/container.component.html',
	styleUrls: ['app/components/container/container.component.css']
})

export class ContainerComponent {

}