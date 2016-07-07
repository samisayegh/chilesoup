import { provideRouter, RouterConfig }  from '@angular/router';

import { ContainerComponent } from './components/container/container.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: RouterConfig = [
  {
    path: 'faq',
    component: FaqComponent
  },
  {
  	path: '',
  	component: ContainerComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];