//our root app component
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  array = [];
  sum = 30;
  addOnScroll = 1;
  adddedOnUi = 0;

  throttle = 500;
  scrollDistance = 0.5;
  scrollUpDistance = 0.5;
  constructor() {
    this.addItems('DOWN', this.sum);
  }

  addItems(direction: 'UP' | 'DOWN' = 'DOWN', amount = this.addOnScroll) {
    if (direction === 'DOWN') {
      for (let i = 0; i < amount; ++i) {
        this.array.push(i + this.adddedOnUi);
      }
    }
    if (direction === 'UP') {
      console.log('---HERE', -amount, this.adddedOnUi);
      for (let i = 0; i > -amount; i--) {
        this.array.unshift(i);
      }
    }
  }

  onScrollDown(ev) {
    console.log('DOWN');
    this.adddedOnUi = this.sum;
    this.sum += this.addOnScroll;
    this.addItems('DOWN');
  }

  onUp(ev) {
    console.log('UP');
    this.adddedOnUi = this.sum;
    this.sum += this.addOnScroll;
    this.addItems('UP');
  }
}
