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
var core_1 = require("@angular/core");
var demoComponent = (function () {
    function demoComponent() {
        this.myName = "Shanu";
    }
    return demoComponent;
}());
demoComponent = __decorate([
    core_1.Component({
        selector: 'demo',
        animations: [
            core_1.trigger('moveBottom', [
                core_1.transition('void => *', [
                    core_1.animate('1s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('moveTop', [
                core_1.transition('void => *', [
                    core_1.animate('1s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateY(+400px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('moveRight', [
                core_1.transition('void => *', [
                    core_1.animate('1s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(-400px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('movelLeft', [
                core_1.transition('void => *', [
                    core_1.animate('4s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(+800px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(150px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('fadeIn', [
                core_1.transition('void => *', [
                    core_1.animate('3s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(0)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ])
        ],
        template: require('./demo.component.html')
    }),
    __metadata("design:paramtypes", [])
], demoComponent);
exports.demoComponent = demoComponent;
//# sourceMappingURL=demo.component.js.map