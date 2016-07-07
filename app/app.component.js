"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var nav_bar_component_1 = require('./components/nav-bar/nav-bar.component');
var container_component_1 = require('./components/container/container.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Chilesoup';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<nav-bar></nav-bar>\n\t<container></container>\n\t",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, nav_bar_component_1.NavBarComponent, container_component_1.ContainerComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            styles: ["\n\t\tcontainer {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 100%;\n\t\t\theight: 500px;\n\t\t\tborder: orange solid 2px;\n\t\t\tmargin-top: 20px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map