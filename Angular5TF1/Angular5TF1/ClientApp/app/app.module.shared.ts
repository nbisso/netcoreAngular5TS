import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


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


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MyComp,
        NgbdModalContent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'mycomp', component: MyComp },
            { path: '**', redirectTo: 'home' },

        ]),
        NgbModule.forRoot()
    ],
    providers: [MissionService, DataServices],
    entryComponents: [NgbdModalContent]
})
export class AppModuleShared {
}
