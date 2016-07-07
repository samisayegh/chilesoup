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
var session_list_component_1 = require('../session-list/session-list.component');
var session_detail_component_1 = require('../session-detail/session-detail.component');
var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'container',
            template: "\n\t<div class=\"col-xs-3\">\n\t\t<button class=\"btn\" href=\"#createSession\">Create a Session</button>\n\t</div>\n\t<div class=\"col-xs-5\">\n\t\t<session-list></session-list>\n\t</div>\n\t<div class=\"col-xs-4\">\n\t\t<session-detail></session-detail>\n\t</div>\n\t",
            directives: [session_list_component_1.SessionListComponent, session_detail_component_1.SessionDetailComponent],
            styles: ["\n\t\tsession-list {\n\t\t\tdisplay: block;\n\t\t\tborder: blue solid 2px;\n\t\t}\n\n\t\tsession-detail {\n\t\t\tdisplay: block;\n\t\t\tborder: green solid 2px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map