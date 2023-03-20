import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{

  lsthackathons:any;
  lstevents:any

  constructor(private router: Router, private http : HttpClient, private activeRoute: ActivatedRoute) {
  this.activeRoute.queryParams.subscribe(params =>{
    let item:any;
    item=this.router.getCurrentNavigation()?.extras.state;
    console.log(item.param1.id);
    this.lsthackathons=item.param1;

    this.http.get('https://127.0.0.1:8000/api/hackathon/'+ item.param2.id + '/evenements').subscribe(data => {
      this.lstevents=data;
      console.log(this.lstevents);
    });
  })
}
ngOnInit(){

}
}
