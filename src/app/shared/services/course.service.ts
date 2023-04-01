import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  CourseUrl: string = "https://ims-database.onrender.com/courses"


  constructor(private _http: HttpClient) { }

  getRecord() {
    return this._http.get(this.CourseUrl);
  }

  // To Add a record in Database
  addRecord(courseObj: any) {
    return this._http.post(this.CourseUrl, courseObj)
  }

  // To Delete a record 
  deleteRecord(id: any) {
    const baseurl = `${this.CourseUrl}/${id}`;
    return this._http.delete(baseurl);
  }

  getsingleRec(id: any) {
    const baseUrl = `${this.CourseUrl}/${id}`;
    return this._http.get(baseUrl)
  }

  // Update Record in database
  updateRecord(courseObj: any) {
    const baseurl = `${this.CourseUrl}/${courseObj.id}`;
    return this._http.put(baseurl, courseObj)
  }
}
