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
  @ViewChild('mailField') mail!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  

  public mailSent: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.nameField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }

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
   let mail = this.mail.nativeElement;;
   nameField.disabled = true;
   messageField.disabled = true;
   sendButton.disabled = true;
   mail.disabled = true;

   let fd = new FormData();
   fd.append('name', nameField.value);
   fd.append('message', messageField.value);
   fd.append('mail', mail.value);

   // Senden . 

   await fetch('https://fabiancaspers.com/send_mail.php'),
   {
    method: 'POST',
    body: fd

   }

   nameField.disabled = false;
   messageField.disabled = false;
   sendButton.disabled = false;
   mail.disabled = false;
  }

}


/* 
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  public mailSent = false;

  public contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    mail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.nameField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }

  scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  async sendMail() {
    if (this.contactForm.valid) {      console.log('Sending mail', this.myForm);
      const nameField = this.nameField.nativeElement;
      const messageField = this.messageField.nativeElement;
      const sendButton = this.sendButton.nativeElement;
      nameField.disabled = true;
      messageField.disabled = true;
      sendButton.disabled = true;

      const fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('message', messageField.value);
      fd.append('mail', this.contactForm.get('mail').value);

      try {
        const response = await fetch('https://w01da36d.kasserver.com/send_mail.php', {
          method: 'POST',
          body: fd
        });

        if (response.status === 200) {
          this.mailSent = true;
          this.contactForm.reset();
        }
      } catch (error) {
        console.log(error);
      } finally {
        nameField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
      }
    }
  }
}
*/
