import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-x-face-detector></app-x-face-detector>

    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'angular-x-face-detector';
}
