import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { MissionService } from '../../Services/ComunicationServices';

@Component({
    selector: 'MyCompo',
    templateUrl: './MyComp.component.html'
})
export class MyComp implements OnInit {

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



    ngOnInit(): void {
        this.name = this.texto;
    }
    public forecasts: WeatherForecast[] = [];


    showAlert = function () {
        alert();
    }

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //        this.forecasts = result.json() as WeatherForecast[];
    //    }, error => console.error(error));
    //}
}

class WeatherForecast {
    dateFormatted: string = "";
    temperatureC: number = 0;
    temperatureF: number = 0;
    summary: string = "";
}


import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
    @Input() name : string = "";

    constructor(public activeModal: NgbActiveModal) { }
}

