import { Component, OnInit } from '@angular/core';

import { MissionService } from '../../Services/ComunicationServices';
import { DataServices } from './DataServices'


@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

    ngOnInit(): void {
        this.dataServices.GetData().subscribe(data => {
            
            var data2 = data.json();
        }, error => console.error(error));

    }

    public currentCount = 0;
    public MyString: string = "Hola Soy Re Pro";
    public incrementCounter() {
        this.currentCount++;
        this.MyString = "0";
    }

    constructor(private missionService: MissionService, private dataServices: DataServices) {

    }

    SendMessageToServices() {
        this.missionService.confirmMission("Hola Soy un austronauta");
    }
    onVoted(mensaje: string) {
        this.MyString = mensaje;
    }
    onchild(mensaje: string) {
        this.MyString = mensaje
    }
}
