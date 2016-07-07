"use strict";
var router_1 = require('@angular/router');
var container_component_1 = require('./components/container/container.component');
var faq_component_1 = require('./components/faq/faq.component');
var routes = [
    {
        path: 'faq',
        component: faq_component_1.FaqComponent
    },
    {
        path: '',
        component: container_component_1.ContainerComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map