import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage {

  lsthackathons:any;

  constructor(private http : HttpClient, private router : Router) {
    this.http.get('https://127.0.0.1:8000/api/hackathon').subscribe(data => {
      this.lsthackathons=data;
    });
  }
  
  AffDetail(item:any){
    let navExtra: NavigationExtras = {
      state: {
        param1: item
      }
    };
    this.router.navigate(['/detail'], navExtra);
  }
}
