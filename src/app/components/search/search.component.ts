import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city;
  @Input()hideSearchBtn = true;
  @Output()informDash: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()informDashAboutBtn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()showSearchComponent;
  constructor() {  }
  ngOnInit() {
  }

  setCity(data) {
    // Set route
    if (data.target.value === 'city') {
      this.hideSearchBtn = true;
    } else {
      this.city = data.target.value;
      this.hideSearchBtn = false;
      this.informDashAboutBtn.emit(false);
    }
    }
  hideSearchComponent() {
    // hide search compo
    this.showSearchComponent = false;
    this.informDash.emit(false);
  }

}
