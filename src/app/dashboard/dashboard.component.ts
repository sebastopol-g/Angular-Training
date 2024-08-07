import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  loadState = "loading";

  changeState() {
    if(this.loadState === "loading"){
      this.loadState = "finished";
    } else if (this.loadState === "finished"){
      this.loadState = "loading";
    } else {
      this.loadState = this.loadState;
    }
  }
 }
