import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav';

@Component({
  selector:'app-root',
  standalone:true,

  imports:[
    RouterOutlet,
    NavComponent
  ],

  templateUrl:'./app.html'
})
export class AppComponent {
  title = 'Hello GitHub! This is my first Angular push.';
}