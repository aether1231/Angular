import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showButton = false;
  username = '';

  getInput(event) {
    if ((<HTMLInputElement>event.target).value.length) {
      this.showButton = true;
    }
  }
}
