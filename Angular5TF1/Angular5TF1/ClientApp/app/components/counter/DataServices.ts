import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataServices {
    private baseUrl: string;
    constructor(private http: Http, private common_Htpp: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Service message commands

    GetData() {
        //return this.http.get(this.baseUrl + 'api/Test');
        return this.common_Htpp.get(this.baseUrl + 'api/Test');
    }
}

interface ItemsResponse {
    results: string[];
}