import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class LoginService {
    private url: string;
    private endpoints = {
        "LoginToken": "api/Login/Token"
    };

    constructor(private httpClient: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        @Inject(DOCUMENT) private document: any) {
        this.url = baseUrl;
    }

    Login(data: string) {
        return this.httpClient.post(this.url + this.endpoints.LoginToken,
            data, httpOptions);
    }

    IsUserLogged(document: any) {
        this.document = document;

        return this.getCookie("token") != "";
    }

    private getCookie(cname: string) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(this.document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

}


