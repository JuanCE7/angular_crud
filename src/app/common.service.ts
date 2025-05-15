import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/users`, user);
  }
  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.url}/users/${user.id}`, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/users/${id}`);
  }
}
