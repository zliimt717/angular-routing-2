import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | undefined;

  get isLoggedIn():boolean{
    return !!this.currentUser;
  }

  constructor(private messageService:MessageService) { }
  login(userName:string,password:string){
    if(!userName ||!password){
      this.messageService.addMessage('Please enter your userName and password');
    }
    if(userName==='admin'){
      this.currentUser={
        id:1,
        userName,
        isAdmin:true
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser={
      id:2,
      userName,
      isAdmin:false
    };
    this.messageService.addMessage(`User:${this.currentUser.userName} logged in`);
  }
  logout():void{
    this.currentUser=undefined;
  }
}
