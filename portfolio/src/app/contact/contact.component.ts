import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  public mailSent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  public contactForm: FormGroup =  new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
    mail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ], []),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ], []),
  })

  async sendMail() {
   // action="https://fabian-caspers.developerakademie.net/Portfolio/send_mail.php"
   console.log('Sending mail', this.myForm);
   let nameField = this.nameField.nativeElement;
   let messageField = this.messageField.nativeElement;
   let sendButton = this.sendButton.nativeElement;
   nameField.disabled = true;
   messageField.disabled = true;
   sendButton.disabled = true;

   let fd = new FormData();
   fd.append('name', nameField.value);
   fd.append('message', messageField.value);

   // Senden

   await fetch('https://w01da36d.kasserver.com/send_mail.php'),
   {
    method: 'POST',
    body: fd

   }

   nameField.disabled = false;
   messageField.disabled = false;
   sendButton.disabled = false;
  }

}
