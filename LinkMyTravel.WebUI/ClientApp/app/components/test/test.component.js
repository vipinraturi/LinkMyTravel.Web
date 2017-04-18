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
var http_1 = require("@angular/http");
//import $ from "jquery";
var TestComponent = (function () {
    function TestComponent(http) {
        this.http = http;
        this.Key = 0;
        this.IsComplete = true;
        this.Names = "Test";
        this.getData();
    }
    TestComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost:54129/api/Todo')
            .subscribe(function (result) {
            _this.todoList = result.json();
            console.log(result.json());
        });
    };
    TestComponent.prototype.addTodoItem = function (Name) {
        console.log('clicked item!!');
        var headers = new http_1.Headers();
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
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-directive',
        template: require('./test.component.html'),
        styles: [require('./test.component.css')]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map