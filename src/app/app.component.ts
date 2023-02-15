import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle = 'Product Management';

  constructor(private authService:AuthService){}

  get isLoggedIn():boolean{
    return this.authService.isLoggedIn; 
  }

  get userName():string{
    if(this.authService.currentUser){
      return this.authService.currentUser.userName;
    }
    return'';
  }

  logOut() {
    this.authService.logout();
    console.log('Log out');
  }
}
