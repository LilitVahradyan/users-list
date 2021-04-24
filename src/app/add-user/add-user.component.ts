import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserBtnIsClicked = false;
 
  firstName = ' ';
  lastName =  ' ';
  age = null;
  password = '';

  @Output() onAddUser = new EventEmitter<User>();
  
  addFrom() : void{
    if(!this.addUserBtnIsClicked){
      this.addUserBtnIsClicked = true
    }else{
      this.addUserBtnIsClicked = false
    }
  }

  addNewUser(){
    this.onAddUser.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      password: this.password,
      status: true
    })
    this.firstName = ' ';
    this.lastName =  ' ';
    this.age = null;
    this.password = '';
  }
}

type User = {
  firstName: string, 
  lastName: string, 
  age: number, 
  password: string, 
  status: boolean
}