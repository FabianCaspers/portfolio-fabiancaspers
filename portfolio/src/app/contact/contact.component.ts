import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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

   await fetch('https://fabian-caspers.developerakademie.net/Portfolio/send_mail.php'),
   {
    method: 'POST',
    body: fd

   }

   nameField.disabled = false;
   messageField.disabled = false;
   sendButton.disabled = false;
  }

}
