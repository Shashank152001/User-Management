import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  
  baseUrl = '/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get(this.baseUrl + '/user')
  }
  saveUser(data:any){
    return this.http.post(this.baseUrl + '/user',data)
  }
  deleteUsers(id:string){
    return this.http.delete(`${this.baseUrl}/user/${id}`)
  }

  // addUser(user: any) {
  //   return this.http.post(this.baseUrl + '/user', {user});
  // }
} 
