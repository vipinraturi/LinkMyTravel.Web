import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { studentsComponent } from './components/students/students.component';
import { TestComponent } from './components/test/test.component';
import { searchComponent } from './components/search/search.component';
import { policiesComponent } from './components/policies/policies.component';
import { contactusComponent } from './components/contactus/contactus.component';
import { aboutusComponent } from './components/aboutus/aboutus.component';
import { demoComponent } from './components/demo/demo.component';
import { myProfileComponent } from './components/account/myProfile.component';
import { howitworksComponent } from './components/howitworks/howitworks.component';
import { handshakeComponent } from './components/handshake/handshake.component';
import { handshakerequestComponent } from './components/handshakerequest/handshakerequest.component';
import { usersComponent } from './components/users/users.component';
import {loginComponent } from './components/login/login.component';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        studentsComponent,
        TestComponent,
        searchComponent,
        policiesComponent,
        contactusComponent,
        aboutusComponent,
        demoComponent,
        myProfileComponent,
        howitworksComponent,
        handshakeComponent,
        handshakerequestComponent,
        usersComponent,
        loginComponent
    ],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'students', component: studentsComponent }, 
            { path: 'test', component: TestComponent }, 
            { path: 'contactus', component: contactusComponent }, 
            { path: 'policies', component: policiesComponent }, 
            { path: 'aboutus', component: aboutusComponent }, 
            { path: 'policies', component: policiesComponent },
            { path: 'demo', component: demoComponent }, 
            { path: 'search', component: searchComponent }, 
            { path: 'myprofile', component: myProfileComponent }, 
            { path: 'howitworks', component: howitworksComponent }, 
            { path: 'handshake', component: handshakeComponent }, 
            { path: 'handshakerequest', component: handshakerequestComponent }, 
            { path: 'users', component: usersComponent }, 
            { path: 'login', component: loginComponent }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {

}
