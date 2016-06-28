import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'my-app',
  template: `
  <nav-bar></nav-bar>
  `,
  directives: [ROUTER_DIRECTIVES, NavBarComponent],
  providers: [ROUTER_PROVIDERS]
})

export class AppComponent {
  title = 'Chilesoup';
}
