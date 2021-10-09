import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  opened = true;
  // token = any;

  constructor( private router: Router, private service:UserService) { }
  fontcolors = ['color : #4285F4', 
                'color : #EA4335', 
                'color : #FBBC05', 
                'color : #4285F4', 
                'color : #EA4335',
                'color : #FBBC05']

  fontletters = ['F', 'u', 'n', 'D', 'o', 'o']

ngOnInit(): void {
}
    toggleSidebar(){

    this.opened = !this.opened;
  }

  logout(){
    this.service.logout().subscribe(data =>{
      console.log(data);
    });
    // localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}


