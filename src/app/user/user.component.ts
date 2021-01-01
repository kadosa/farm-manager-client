import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'actions',
  ];
  dataSource: User[] = [];
  user: User = new User();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchUsers().subscribe((result) => {
      this.dataSource = result;
    });
  }

  selectUser(user: User) {
    this.user = user;
  }

  newUser() {
    this.user = new User();
  }

  createUser(user: User) {
    this.apiService.createUser(user).subscribe((result) => {
      console.log('user created', result);
    });
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe((result) => {
      console.log('user deleted', result);
    });
  }

  updateUser(user: User) {
    console.log('running with this user', user);
    this.apiService.updateUser(user).subscribe((result) => {
      console.log('updated user', user);
    });
  }
}
