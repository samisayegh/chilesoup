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
var LocationBarComponent = (function () {
    function LocationBarComponent() {
    }
    LocationBarComponent = __decorate([
        core_1.Component({
            selector: 'location-bar',
            template: "\n\t<div class=\"input-group\">\n\t\t<div class=\"input-group-addon\">Loc:</div>\n\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Montreal\">\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], LocationBarComponent);
    return LocationBarComponent;
}());
exports.LocationBarComponent = LocationBarComponent;
//# sourceMappingURL=location-bar.component.js.map