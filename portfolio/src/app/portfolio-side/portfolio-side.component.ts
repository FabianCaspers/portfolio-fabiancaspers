import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-portfolio-side',
  templateUrl: './portfolio-side.component.html',
  styleUrls: ['./portfolio-side.component.scss']
})
export class PortfolioSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
