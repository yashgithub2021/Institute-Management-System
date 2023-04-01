import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  instituteUrl: string = "https://ims-database.onrender.com/institutes"


  constructor(private _http: HttpClient) { }

  //To get record from Database
  getRecord() {
    return this._http.get(this.instituteUrl);
  }

  // To Add a record in Database
  addRecord(instObj: any) {
    return this._http.post(this.instituteUrl, instObj)
  }

  // Delete a record from Database
  deleteRecord(id: any) {
    const baseurl = `${this.instituteUrl}/${id}`;
    return this._http.delete(baseurl);
  }

  // Get single record from database

  getsingleRec(id: any) {
    const baseUrl = `${this.instituteUrl}/${id}`;
    return this._http.get(baseUrl)
  }

  // Update Record in database
  updateRecord(instObj: any) {
    const baseurl = `${this.instituteUrl}/${instObj.id}`;
    return this._http.put(baseurl, instObj)
  }


}
