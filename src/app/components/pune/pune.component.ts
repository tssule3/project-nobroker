import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
  isLoggedIn = false;
  photosArray;
  minVal = 0;
  min = 0;
  max = 0;
  myCaret = true;
  constructor() { }

  ngOnInit() {
    this.photosArray = [{'id': 1, 'img1': 'assets/11.jpg', 'img2': 'assets/22.jpg', 'img3': 'assets/33.jpg',
      'img4': 'assets/44.jpg', 'propName' : '1 RK KHARADI', 'propLocation' : 'Eon Free Zone Kharadi',
      'propArea' : '250', 'propDeposit' : '15000', 'propRent' : '5000', 'propFurnishing' : 'Full', 'propAge' : '10',
      'propTennants' : 'Family', 'propReadyToMove' : 'YES'},
      {'id': 2, 'img1': 'assets/22.jpg', 'img2': 'assets/33.jpg', 'img3': 'assets/44.jpg',
        'img4': 'assets/11.jpg', 'propName' : '1 RK NAGAR ROAD', 'propLocation' : 'Vinayak Hospital SainikWadi',
        'propArea' : '300', 'propDeposit' : '12000', 'propRent' : '6000', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'All', 'propReadyToMove' : 'YES'},
      {'id': 3, 'img1': 'assets/33.jpg', 'img2': 'assets/44.jpg', 'img3': 'assets/11.jpg',
        'img4': 'assets/22.jpg', 'propName' : '1 RK KALYANI NAGAR', 'propLocation' : 'Loop Road Business Bay',
        'propArea' : '290', 'propDeposit' : '10000', 'propRent' : '4000', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'All', 'propReadyToMove' : 'YES'},
      {'id': 4, 'img1': 'assets/44.jpg', 'img2': 'assets/11.jpg', 'img3': 'assets/22.jpg',
        'img4': 'assets/33.jpg', 'propName' : '1 RK KOTHRUD', 'propLocation' : 'Anand Park',
        'propArea' : '220', 'propDeposit' : '14000', 'propRent' : '5500', 'propFurnishing' : 'Full', 'propAge' : '10',
        'propTennants' : 'Family', 'propReadyToMove' : 'YES'}];
  }

  showOwnerInfo() {
    if (this.isLoggedIn === false) {

    }
  }

}
