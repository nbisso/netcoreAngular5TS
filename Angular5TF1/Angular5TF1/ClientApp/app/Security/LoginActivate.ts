import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from './../Services/LoginService'
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LoginActivate implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        if (this.loginService.IsUserLogged()) {
            return true;
        }
        this.router.navigate(["Home"]);
        return false;
    }

    constructor(private router: Router, private loginService: LoginService) {
    }

}