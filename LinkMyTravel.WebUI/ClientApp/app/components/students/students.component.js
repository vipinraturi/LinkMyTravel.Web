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
var studentsComponent = (function () {
    function studentsComponent(http) {
        this.http = http;
        // to get the Student Details
        this.student = [];
        // to hide and Show Insert/Edit 
        this.AddstudetnsTable = false;
        // To stored Student Informations for insert/Update and Delete
        this.StdIDs = "0";
        this.StdNames = "";
        this.Emails = "";
        this.Phones = "";
        this.Addresss = "";
        //For display Edit and Delete Images
        this.imgEdit = require("./Images/edit.gif");
        this.imgDelete = require("./Images/delete.gif");
        //for animation status 
        this.animStatus = 'inactive';
        this.myName = "Shanu";
        this.AddstudetnsTable = false;
        this.getData();
    }
    //for Animation to toggle Active and Inactive
    studentsComponent.prototype.animButton = function () {
        this.animStatus = (this.animStatus === 'inactive' ? 'active' : 'inactive');
    };
    //to get all the Student data from Web API
    studentsComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('/api/StudentMastersAPI/Student').subscribe(function (result) {
            _this.student = result.json();
        });
    };
    // to show form for add new Student Information
    studentsComponent.prototype.AddStudent = function () {
        alert('1');
        this.animButton();
        this.AddstudetnsTable = true;
        this.StdIDs = "0";
        this.StdNames = "";
        this.Emails = "";
        this.Phones = "";
        this.Addresss = "";
    };
    // to show form for edit Student Information
    studentsComponent.prototype.editStudentsDetails = function (StdID, StdName, Email, Phone, Address) {
        this.animButton();
        this.AddstudetnsTable = true;
        this.StdIDs = StdID;
        this.StdNames = StdName;
        this.Emails = Email;
        this.Phones = Phone;
        this.Addresss = Address;
    };
    // If the studentid is 0 then insert the student infromation using post and if the student id is more than 0 then edit using put mehod
    studentsComponent.prototype.addStudentsDetails = function (StdID, StdName, Email, Phone, Address) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        if (StdID == 0) {
            this.http.post('api/StudentMastersAPI', JSON.stringify({ StdID: StdID, StdName: StdName, Email: Email, Phone: Phone, Address: Address }), { headers: headers }).subscribe();
            alert("Student Detail Inserted");
        }
        else {
            this.http.put('api/StudentMastersAPI/' + StdID, JSON.stringify({ StdID: StdID, StdName: StdName, Email: Email, Phone: Phone, Address: Address }), { headers: headers }).subscribe();
            alert("Student Detail Updated");
        }
        this.AddstudetnsTable = false;
        this.getData();
    };
    //to Delete the selected student detail from database.
    studentsComponent.prototype.deleteStudentsDetails = function (StdID) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        this.http.delete('api/StudentMastersAPI/' + StdID, { headers: headers }).subscribe();
        alert("Student Detail Deleted");
        this.getData();
    };
    studentsComponent.prototype.closeEdits = function () {
        this.AddstudetnsTable = false;
        this.StdIDs = "0";
        this.StdNames = "";
        this.Emails = "";
        this.Phones = "";
        this.Addresss = "";
    };
    return studentsComponent;
}());
studentsComponent = __decorate([
    core_1.Component({
        selector: 'students',
        animations: [
            core_1.trigger('buttonReSize', [
                core_1.state('inactive', core_1.style({
                    transform: 'scale(1)',
                    backgroundColor: '#f83500'
                })),
                core_1.state('active', core_1.style({
                    transform: 'scale(1.4)',
                    backgroundColor: '#0094ff'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ]),
            core_1.trigger('moveBottom', [
                core_1.transition('void => *', [
                    core_1.animate(900, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('moveTop', [
                core_1.transition('void => *', [
                    core_1.animate(900, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateY(+400px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('moveRight', [
                core_1.transition('void => *', [
                    core_1.animate(900, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(-400px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('movelLeft', [
                core_1.transition('void => *', [
                    core_1.animate(900, core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(+400px)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(25px)', offset: .75 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ]),
            core_1.trigger('fadeIn', [
                core_1.transition('* => *', [
                    core_1.animate('1s', core_1.keyframes([
                        core_1.style({ opacity: 0, transform: 'translateX(0)', offset: 0 }),
                        core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                    ]))
                ])
            ]),
        ],
        template: require('./students.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http])
], studentsComponent);
exports.studentsComponent = studentsComponent;
//# sourceMappingURL=students.component.js.map