import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage {

  constructor(private http : HttpClient) {
    this.http.get('https://127.0.0.1:8000/api/hackathon').subscribe(data => {
      console.log(data);
    });
  }

}
