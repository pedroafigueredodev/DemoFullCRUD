import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../model/user';




@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  

  URL_API = "http://localhost:4000/api/users";

  userList : UserData[];

  constructor(private http : HttpClient) {
    

  }

  loadUserList() {
    return this.http.get(this.URL_API);
  }

  addUser(user: UserData){
    return this.http.post(this.URL_API,user);
  }

  editUser(id: string, user: UserData){
    return this.http.put(this.URL_API+"/"+id,user);
  }

  deleteUser(id: string){
    return this.http.delete(this.URL_API+"/"+id);
  }

 
  getUser(id: string){
    return this.http.get(this.URL_API+"/"+id);
  }



}
