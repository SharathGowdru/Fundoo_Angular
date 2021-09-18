import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened =true;

  constructor( private router: Router ) { }

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
    this.opened = !this.opened
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
