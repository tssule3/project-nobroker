import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()showChildDiv;
@Output()toggleParentFromChild: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output()informParent: EventEmitter<boolean> = new EventEmitter<boolean>();
tempProp;
tempProp1;
  constructor() { }

  ngOnInit() {
    // this.toggleParentFromChild.emit(true);
    // this.tempProp1 =  this.toggleParentFromChild.emit(false);

  }
  showParent() {
    this.toggleParentFromChild.emit(false);
  }
  hideParent() {
    this.toggleParentFromChild.emit(true);

  }
hideChild() {
    this.showChildDiv = false;
    this.informParent.emit(false);
}
}
