import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../app/Services/Common/ModalService';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared,
        NgbModule.forRoot()
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
    entryComponents: [NgbdModalContent]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
