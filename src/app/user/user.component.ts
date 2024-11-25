import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input with decorator is used to recieve inout from out source here it recieve input fromm app.component.html file
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // OR
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  //give any name
  // below is EventEmitter defination
  /*Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

@usageNotes
Extends RxJS Subject for Angular by adding the emit() method. */

  // Output method is used to send any event or value to outside of this component
  @Output() select = new EventEmitter<string>(); // <string> add for extra safety to pass only string

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // event function on button click
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
