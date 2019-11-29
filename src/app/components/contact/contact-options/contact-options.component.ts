import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact-options',
  templateUrl: './contact-options.component.html',
  styleUrls: ['./contact-options.component.css']
})
export class ContactOptionsComponent implements OnInit {

  showModal: boolean;
  showResponse: boolean;
  response: string;

  constructor() {
    this.showModal = false;
    this.showResponse = false;
  }

  ngOnInit() {
  }

  showModalContainer() {
    this.showModal = true;
    this.showResponse = false;
  }

  closeModal(event) {
    this.showModal = event.showModal;
    this.response = event.response;
    this.showResponse = true;
  }

}
