import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../../services/contact/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  emailForm: FormGroup;
  @Output() showModal: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly builder: FormBuilder, private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.emailForm = this.builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  sendEmail() {
    if (this.emailForm.valid) {
      this.contactService.sendEmail(this.emailForm.value).subscribe(response => {
        if (response.status === 200) {
          this.showModal.emit({showModal: false, response: response.body.message});
        } else {
          console.log(response);
        }
      }, error => {
        this.showModal.emit({showModal: false, response: error});
      });
    }
  }
}
