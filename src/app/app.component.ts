import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = "Sebastien G";
  rootItems: string[] = ['Apple', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
