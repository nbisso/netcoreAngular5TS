import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../../Services/Common/ModalService';
import { MissionService } from '../../Services/ComunicationServices';

@Component({
    selector: 'MyCompo',
    templateUrl: './MyComp.component.html'
})


export class MyComp {

    constructor(private missionService: MissionService, private modalService: NgbModal) {
        missionService.missionConfirmed$.subscribe(
            astronaut => {
                this.name = (astronaut);
            });
    }

    open() {
        const modalRef = this.modalService.open(NgbdModalContent);

        modalRef.componentInstance.name = 'World';

        modalRef.result.then((result) => {
            alert(`Closed with: ${result}`);
        }, (reason) => {
            alert(`Dismissed ${this.getDismissReason(reason)}`);

        });
    }

    @Input() texto: string = "";
    @Output() onVoted = new EventEmitter<string>();
    @Output() onChildChange = new EventEmitter<string>();
    voted = false;
    vote(): void {
        this.onVoted.emit(this.name);
    }
    sendMessageToParent(): void {
        this.onChildChange.emit(this.name);
    }


    public name: string = "Test";

    public forecasts: WeatherForecast[] = [];


    showAlert = function () {
        alert();
    }

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //        this.forecasts = result.json() as WeatherForecast[];
    //    }, error => console.error(error));
    //}

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}

class WeatherForecast {
    dateFormatted: string = "";
    temperatureC: number = 0;
    temperatureF: number = 0;
    summary: string = "";
}




