import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../Services/Common/ModalService';
import { MissionService } from '../../Services/ComunicationServices';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'Login',
    templateUrl: './Login.html'
})
export class Login {
    public loginData: ClassLogin = new ClassLogin();

    public loginForm: FormGroup = new FormGroup({
        'email': new FormControl(this.loginData.email, [
            Validators.required,
            Validators.minLength(4)

            //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        ]),
        'password': new FormControl(this.loginData.password),
    });
    
    constructor() {

    }
}

export class ClassLogin {
    public email?: string;
    public password?: string;
}




