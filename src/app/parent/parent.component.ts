import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
toggleChildFromParent = true;
showParentDiv = true;
  constructor() { }

  ngOnInit() {
  }
  toggleChild() {
    this.toggleChildFromParent = !this.toggleChildFromParent;
  }
  changeParentProp(data) {
      this.showParentDiv = data;
  }
  informationFromChild(data) {
    this.toggleChildFromParent  = data;
  }
}
