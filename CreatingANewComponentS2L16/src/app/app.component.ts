import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './servers/servers.component.css'] // use multiple style sheets
  // style: `p { color: red }` - also possible to use inline style rather than url-based style
})
export class AppComponent {
  title = 'CreatingANewComponentS2L16';
}
