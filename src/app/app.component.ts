import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive = false;
  
  activate(){
    this.isActive = !this.isActive;
  }

  getText(){
    return this.isActive ? "I'm triggered" : "I'm not triggered";
  }
}
