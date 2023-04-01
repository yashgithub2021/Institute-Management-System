import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url: string = "https://ims-database.onrender.com/employees"
  newurl = "https://ims-database.onrender.com/employees"
  empUrl: string = "https://ims-database.onrender.com/users"
  adminUrl: string = "https://ims-database.onrender.com/admin"

  constructor(private _http: HttpClient) { }


  length() {
    this._http.get(this.newurl).subscribe((len) => {
      length = Object.keys(len).length;
      console.log(length)
    })
  }

  // Get Admin
  getAdmin() {
    return this._http.get(this.adminUrl)
  }

  //Get Single Admin
  getSingleAdmin(id: any) {
    const baseurl = `${this.adminUrl}/${id}`;
    return this._http.get(baseurl);
  }

  // Get Emp from Database
  getEmp() {
    return this._http.get(this.empUrl)
  }

  // Add Emp in database
  addEmp(empObj: any) {
    return this._http.post(this.empUrl, empObj)
  }

  //Get single Emp
  getsingleEmp(id: any) {
    const baseurl = `${this.empUrl}/${id}`;
    return this._http.get(baseurl);
  }


  // Update Emp in database
  updateEmp(empObj: any) {
    const baseurl = `${this.empUrl}/${empObj.id}`;
    return this._http.put(baseurl, empObj)
  }

  // -------------------------------------------------------------------------------------------

  // Get Record From Database
  getData() {
    return this._http.get(this.url);
  }

  // Add Record In DataBase
  addRecord(empObj: any) {
    return this._http.post(this.url, empObj)
  }

  // Delete Record from Database
  deleteRecord(id: any) {
    const baseurl = `${this.url}/${id}`;
    return this._http.delete(baseurl);
  }

  // Get single record from database
  getSingleRec(id: any) {
    const baseurl = `${this.url}/${id}`;
    return this._http.get(baseurl);
  }


  // Update Record in database
  updateRecord(empObj: any) {
    const baseurl = `${this.url}/${empObj.id}`;
    return this._http.put(baseurl, empObj)
  }


}
