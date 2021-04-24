import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

 users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 32,
      password: '121313',
      status: true
      
    },
    {
      firstName: 'Mike',
      lastName: 'Daniels',
      age: 52,
      password: '656356',
      status: false
    
    }
  ];
   
  updateUsersList(user: User){
    this.users.unshift(user);
  }

  deleteUser(idx: number){
    this.users.splice(idx, 1);
  }
}

type User = {
  firstName: string, 
  lastName: string, 
  age: number, 
  password: string, 
  status: boolean
}