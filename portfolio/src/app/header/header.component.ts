import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor() { }

  openAndCloseMenu(){
    this.mobileMenuButton.nativeElement.classList.toggle('active');
    this.mobileMenu.nativeElement.classList.toggle('show');
  }

  ngOnInit(): void {
  }

}
