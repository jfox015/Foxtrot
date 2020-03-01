import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    user: User;
    errorMessage: string;

    constructor(private userService: UserService, private _authService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = null;
    }

    ngOnInit() {
        //this.loadAllUsers();
        this.user = this._authService.getUserDetails();
    }

    /*deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(
            data => this._processUsers(data),
            error =>  this.errorMessage = <any>error);
    }

    private _processUsers(result:any) {    
        this.users = result.users;
    }*/
}