//our root app component
import { Component } from '@angular/core';

const nisPackage = require('../../package.json');
declare const chance;

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  array = [];
  sum = 30;
  addOnScroll = 5;
  adddedOnUi = 0;

  throttle = 1000;
  scrollDistance = 0.5;
  scrollUpDistance = 0.5;
  direction = '';
  modalOpen = false;

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  constructor() {
    this.addItems('push');
  }

  addItems(_method) {
    for (let i = this.sum - this.adddedOnUi; i < this.sum; ++i) {
      this.array[_method]([i, ' ', i, ' ', i, ' ', i].join(''));
    }
  }

  onScrollDown(ev) {
    console.log('DOWN');
    this.adddedOnUi = this.sum;
    this.sum += this.addOnScroll;
    this.addItems('push');

    this.direction = 'down';
  }

  onUp(ev) {
    // console.log('UP');
    // this.sum += this.addOnScroll;
    // this.addItems('unshift');
    // this.direction = 'up';
  }
}
