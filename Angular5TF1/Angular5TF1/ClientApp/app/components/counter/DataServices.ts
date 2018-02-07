import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataServices {
    private baseUrl: string;
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Service message commands

    GetData() {
        return this.http.get(this.baseUrl + 'api/Test');
    }
}

interface ItemsResponse {
    results: string[];
}