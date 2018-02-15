import { Injectable, Inject } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( @Inject(DOCUMENT) private _document: any) { }
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