import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.route.navigate(['/home/home']);
    }, 2000);
  }

}
