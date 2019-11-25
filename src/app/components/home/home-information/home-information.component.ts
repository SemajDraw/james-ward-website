import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './home-information.component.html',
  styleUrls: ['./home-information.component.css']
})
export class HomeInformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToPortfolio() {
    this.router.navigate(['portfolio']);
  }

  routeToResume() {
    this.router.navigate(['resume']);
  }

}
