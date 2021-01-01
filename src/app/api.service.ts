import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import urls from './urls';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  public fetchUsers() {
    return this.httpClient.get<User[]>(urls.users, this.httpOptions);
  }
  public updateUser(user: User) {
    return this.httpClient.put<User>(
      urls.user(user.id),
      user,
      this.httpOptions
    );
  }
  public createUser(user: User) {
    return this.httpClient.post<User>(urls.register, user, this.httpOptions);
  }

  public deleteUser(id: number) {
    return this.httpClient.delete(urls.user(id), this.httpOptions);
  }

  public login(user: User) {
    return this.httpClient.post<any>(urls.login, user, {
      withCredentials: true,
    });
  }

  public logout() {
    return this.httpClient.post(urls.logout, null, this.httpOptions);
  }
}
