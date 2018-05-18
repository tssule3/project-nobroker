import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-prop',
  templateUrl: './search-prop.component.html',
  styleUrls: ['./search-prop.component.css']
})
export class SearchPropComponent implements OnInit {

  @Input() showEverything;
  @Output() changeShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {  }
  ngOnInit() {
    console.log('initial showEverything' + this.showEverything);
  }
showHideEverything() {
    this.showEverything = false;
    console.log('after click showEverything' + this.showEverything);
    this.changeShow.emit(false);
}
}
