import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lsthackathons:any;

  constructor(private http : HttpClient, private router : Router) {
    this.http.get('https://127.0.0.1:8000/api/hackathon').subscribe(data => {
      this.lsthackathons=data;
      console.log(this.lsthackathons);
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
