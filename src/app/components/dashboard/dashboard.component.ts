import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showEverything;
  btnClick = false;
  constructor() { }

  ngOnInit() {
   this.showEverything = true;
  }
  toggleButton() {
    this.btnClick = !this.btnClick;
  }
  showHideSearch(data) {
    
    this.showEverything = data;
  }
  toggleHide() {
    this.showEverything = true;
  }

}
