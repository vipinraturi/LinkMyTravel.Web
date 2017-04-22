"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var counter_component_1 = require("./components/counter/counter.component");
var students_component_1 = require("./components/students/students.component");
var test_component_1 = require("./components/test/test.component");
var search_component_1 = require("./components/search/search.component");
var policies_component_1 = require("./components/policies/policies.component");
var contactus_component_1 = require("./components/contactus/contactus.component");
var aboutus_component_1 = require("./components/aboutus/aboutus.component");
var demo_component_1 = require("./components/demo/demo.component");
var myProfile_component_1 = require("./components/account/myProfile.component");
var howitworks_component_1 = require("./components/howitworks/howitworks.component");
var handshake_component_1 = require("./components/handshake/handshake.component");
var handshakerequest_component_1 = require("./components/handshakerequest/handshakerequest.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            counter_component_1.CounterComponent,
            fetchdata_component_1.FetchDataComponent,
            home_component_1.HomeComponent,
            students_component_1.studentsComponent,
            test_component_1.TestComponent,
            search_component_1.searchComponent,
            policies_component_1.policiesComponent,
            contactus_component_1.contactusComponent,
            aboutus_component_1.aboutusComponent,
            demo_component_1.demoComponent,
            myProfile_component_1.myProfileComponent,
            howitworks_component_1.howitworksComponent,
            handshake_component_1.handshakeComponent,
            handshakerequest_component_1.handshakerequestComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'counter', component: counter_component_1.CounterComponent },
                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
                { path: 'students', component: students_component_1.studentsComponent },
                { path: 'test', component: test_component_1.TestComponent },
                { path: 'contactus', component: contactus_component_1.contactusComponent },
                { path: 'policies', component: policies_component_1.policiesComponent },
                { path: 'aboutus', component: aboutus_component_1.aboutusComponent },
                { path: 'policies', component: policies_component_1.policiesComponent },
                { path: 'demo', component: demo_component_1.demoComponent },
                { path: 'search', component: search_component_1.searchComponent },
                { path: 'myprofile', component: myProfile_component_1.myProfileComponent },
                { path: 'howitworks', component: howitworks_component_1.howitworksComponent },
                { path: 'handshake', component: handshake_component_1.handshakeComponent },
                { path: 'handshakerequest', component: handshakerequest_component_1.handshakerequestComponent },
                { path: '**', redirectTo: 'home' }
            ])
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map