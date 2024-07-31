import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = "Sebastien G";
  
  onUserInput(event) {
    this.name = event.target.value;
  }
}
