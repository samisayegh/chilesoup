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
var location_bar_component_1 = require('../location-bar/location-bar.component');
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n\t<nav>\n\t\t<div class=\"navbar-brand col-xs-3\">chilesoup</div>\n\t\t<location-bar class=\"col-xs-3\"></location-bar>\n\t\t<a href=\"/faq\" class=\"col-xs-3\">FAQ</a>\n\t\t<a href=\"/login\" class=\"col-xs-3\">Login</a>\n\t</nav>\n\t",
            styles: ["\n\t\tnav {\n\t\t\tborder: red solid 2px;\n\t\t\theight: 50px;\n\t\t}\n\t"],
            directives: [location_bar_component_1.LocationBarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map