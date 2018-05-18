import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  makeBtnHidden = true;
  showSearchFromDash = true;
  btnClick = false;
  constructor() { }

  ngOnInit() {
  }
  toggleButton() {
    this.btnClick = !this.btnClick;
  }
  getInfoFromSearch(data) {
      this.showSearchFromDash = data;
  }
  changeSearchProperty() {
    this.showSearchFromDash = true;
    this.makeBtnHidden = true;
  }
  methodToToggleBtnHidden(data) {
    this.makeBtnHidden = data;
  }
}
