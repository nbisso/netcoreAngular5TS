import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './ModalService.html'
})
export class NgbdModalContent {
    @Input() name: string = "";

    constructor(public activeModal: NgbActiveModal) { }
}