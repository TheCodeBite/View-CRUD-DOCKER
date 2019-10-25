import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = "localhost:8080/api/"
  constructor(private http: HttpClient) { }

  //CRUD
  CreateUser(params: any){
    return this.http.post(this.url + "user/", params);
  }

  GetUsers(){
    return this.http.get(this.url + "users/");
  }

  UpdateUser(params: any, id: any){
    return this.http.put(this.url + "user/" + id, params);
  }

  DeleteUser(id:any){
    return this.http.delete(this.url + "user/" + id);
  }
}
