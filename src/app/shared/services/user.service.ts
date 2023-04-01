import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  AdminUrl: string = "https://ims-database.onrender.com/admin"
  UserUrl: string = "https://ims-database.onrender.com/users"

  constructor(private _http: HttpClient) { }


  //For Admin
  getAdmin() {
    return this._http.get(this.AdminUrl)
  }

  setAdmin(admin: any) {
    sessionStorage.setItem("admin", admin);
  }

  removeAdmin() {
    sessionStorage.removeItem("admin");
  }



  //For Users 
  getUser() {
    return this._http.get(this.UserUrl)
  }

  setUser(user: any) {
    sessionStorage.setItem("users", user)
  }

  removeUser() {
    sessionStorage.removeItem("users");
  }
}
