import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../Services/Common/ModalService';
import { MissionService } from '../../Services/ComunicationServices';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './../../Services/LoginService'

@Component({
    selector: 'Login',
    templateUrl: './Login.html'
})
export class Login {

    public isSubmit: boolean = false;
    public loginForm: FormGroup = new FormGroup({
        'email': new FormControl(null, [
            Validators.required,
            Validators.minLength(4)

            //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        ]),
        'password': new FormControl(null, Validators.required),
    });

    onSubmit() {
        this.isSubmit = true;
        if (this.loginForm.valid) {
            var data = (JSON.stringify(this.loginForm.value));
            this.loginService.Login(data).subscribe(
                data => {
                    // refresh the list
                    return true;
                },
                error => {
                    console.error("Error saving food!");                    
                }
            );
        }

    }

    constructor(private loginService: LoginService) {

    }
}





