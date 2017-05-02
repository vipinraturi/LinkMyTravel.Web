import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'login',
    template: require('./login.component.html')
})

export class loginComponent
{
    constructor(http: Http) {
      
    }
}
