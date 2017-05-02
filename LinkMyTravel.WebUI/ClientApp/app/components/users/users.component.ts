import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'users-directive',
    template: require('./users.component.html'),
    styles: [require('./users.component.css')]
})

export class usersComponent {
    public Users: User[];

    constructor(public http: Http) {
        this.getData();
    }

    getData() {
        let headers: Headers = new Headers();
        headers.append('X-Token', 'test123');

        this.http.get('http://localhost:54129/api/Admin/',
            { headers })
            .subscribe((data) => {
                console.log(data.json().list);
                this.Users = data.json().list;
                console.log(this.Users);
                debugger;

            });
    }
}

interface User {
    id: string;
    userName: string;
    phoneNumber: string;
    email: string;
}

