import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.apiService.login(this.user).subscribe(({ user, token }) => {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('user logged in with token', token);
      this.router.navigateByUrl('home');
    });
  }
}
