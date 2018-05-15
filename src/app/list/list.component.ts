import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
photosArray;
minVal = 0;
min = 0;
max = 0;
myCaret = true;
  constructor() { }

  ngOnInit() {
    this.photosArray = [
      {'img': '../../assets/11.jpg', 'propName' : '1 RK KHARADI', 'propLocation' : 'Eon Free Zone Kharadi',
      'propArea' : '250', 'propDeposit' : '15000', 'propRent' : '5000', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'Family', 'propReadyToMove' : 'YES'},
      {'img': '../../assets/22.jpg', 'propName' : '1 RK NAGAR ROAD', 'propLocation' : 'Vinayak Hospital SainikWadi',
        'propArea' : '300', 'propDeposit' : '12000', 'propRent' : '6000', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'All', 'propReadyToMove' : 'YES'},
      {'img': '../../assets/33.jpg', 'propName' : '1 RK KALYANI NAGAR', 'propLocation' : 'Loop Road Business Bay',
        'propArea' : '290', 'propDeposit' : '10000', 'propRent' : '4000', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'All', 'propReadyToMove' : 'YES'},
      {'img': '../../assets/44.jpg', 'propName' : '1 RK KOTHRUD', 'propLocation' : 'Anand Park',
        'propArea' : '220', 'propDeposit' : '14000', 'propRent' : '5500', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'Family', 'propReadyToMove' : 'YES'}];
  }

}