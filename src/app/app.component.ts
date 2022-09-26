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

  throttle = 100;
  scrollDistance = 1;
  scrollUpDistance = 1;
  direction = '';
  modalOpen = false;

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  constructor() {
    this.addItems('push');
  }

  addItems(_method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', i, ' ', i, ' ', i].join(''));
    }
  }

  onScrollDown(ev) {
    console.log('DOWN');
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
