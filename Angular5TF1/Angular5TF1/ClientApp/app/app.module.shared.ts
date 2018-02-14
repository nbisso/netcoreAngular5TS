import { NgModule, Injectable, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MyComp } from './components/MyComponet/MyComp.component';
import { MissionService } from './Services/ComunicationServices';
import { DataServices } from './components/counter/DataServices'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../app/Services/Common/ModalService';
import { LoginActivate } from './Security/LoginActivate';
import { Login } from './components/LogIn/Login'
import { LoginService } from './Services/LoginService'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( @Inject(DOCUMENT) private _document: any ) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = this._document.cookie;

        if (idToken.indexOf("token") > -1) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MyComp,
        NgbdModalContent,
        Login
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'mycomp', component: MyComp },
            { path: 'login', component: Login },
            { path: 'Admin', component: MyComp, canActivate: [LoginActivate] },
            { path: '**', redirectTo: 'home' },

        ]),
        NgbModule.forRoot()
    ],
    providers: [MissionService, DataServices, LoginActivate, LoginService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }],
    entryComponents: [NgbdModalContent]
})
export class AppModuleShared {
}


