import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem : string = "";

 addItem() {
     this.itemAdded.emit(this.newItem);
  }
}
