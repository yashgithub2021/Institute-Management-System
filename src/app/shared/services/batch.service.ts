import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  BatchUrl:string="http://localhost:3000/batch"


  constructor(private _http:HttpClient) { }

  getRecord(){
    return this._http.get(this.BatchUrl);
  }

  // To Add a record in Database
  addRecord(BatchObj:any){
    return this._http.post(this.BatchUrl,BatchObj)
  }


  //To Delete a record 
  deleteRecord(id:any){
    const baseurl = `${this.BatchUrl}/${id}`;
    return this._http.delete(baseurl);
  }

  getsingleRec(id:any){
    const baseUrl = `${this.BatchUrl}/${id}`;
    return this._http.get(baseUrl)
  }

  // Update Record in database
  updateRecord(BatchObj:any){
    const baseurl = `${this.BatchUrl}/${BatchObj.id}`;
    return this._http.put(baseurl,BatchObj)
  }
}
