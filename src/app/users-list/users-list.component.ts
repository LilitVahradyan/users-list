import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tr[app-users-list]',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input('userItem') user: User;
  @Input('userIndex') idx: number;

  @Output() idxUser = new EventEmitter<number>();

  deleteUser(idx: number): void{
    this.idxUser.emit(idx);
  }

  changeStatus(): void{
    this.user.status = !this.user.status
  }


}


type User = {
  firstName: string, 
  lastName: string, 
  age: number, 
  password: string, 
  status: boolean
}