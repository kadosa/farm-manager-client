import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.apiService.logout().subscribe(
      (result) => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('login');
      },
      (error) => {
        console.log('error happened when logging out', error);
        localStorage.removeItem('user');
        this.router.navigateByUrl('login');
      }
    );
  }
}
