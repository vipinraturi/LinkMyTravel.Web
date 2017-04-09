import {
    Component, Input, trigger,
        state,
        style,
        transition,
        animate,
        keyframes
} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

//import $ from "jquery";

@Component({
    selector: 'test-directive',
    template: require('./test.component.html'),
    styles: [require('./test.component.css')]
})



export class TestComponent {

    public todoList: Todo[];
    public Message: string;
    public Key: number = 0;
    public IsComplete: boolean = true;
    public Names: string = "Test";
    
    constructor(public http: Http) {
        this.getData();
    }

    getData() {
        this.http.get('http://localhost:54129/api/Todo')
            .subscribe(result => {
                this.todoList = result.json();
                console.log(result.json());
            });
    }

    addTodoItem(Name) {
        console.log('clicked item!!');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:50841');

        console.log(this.Key + ' ' + Name + '  ' + this.IsComplete + '  ' + this.Names);
        //$('#name').val()

        //if (this.Key == 0) {
        //    this.http.post('http://localhost:54129/api/Todo',
        //        JSON.stringify({ Key: this.Key, Name: this.Name, Email: this.IsComplete }),
        //        { headers: headers })
        //        .subscribe();
        //    //alert("Todo Detail Inserted");
        //}
        //else {
        //    this.http.put('http://localhost:54129/api/Todo' + this.Key,
        //        JSON.stringify({ Key: this.Key, Name: this.Name, Email: this.IsComplete }),
        //        { headers: headers })
        //        .subscribe();
        //    //alert("Todo Detail Updated");
        //}


        //this.getData();
    }

    //http.get('http://localhost:54129/api/Todo').map((res: Response) => res.json())
    //    .subscribe((items: Array<Todo>) => {
    //        this.todoList = items;
    //        this.Message = 'Test';
    //    });


    //http.get('http://localhost:54129/api/Todo')
    //    .subscribe(result => {
    //    debugger;
    //    //this.todoList = result.json();

    //    //this.Message = result.
    //});
}



export interface Todo {
    Key: number;
    Name: string;
    IsComplete: boolean;
}




