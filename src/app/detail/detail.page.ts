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

  constructor(private router: Router, private http : HttpClient, private activeRoute: ActivatedRoute) {
this.activeRoute.queryParams.subscribe(params =>{
  let item:any;
  item=this.router.getCurrentNavigation()?.extras.state;
  console.log(item.param1);
  this.lsthackathons=item.param1;
  
})

}
ngOnInit(){

}
}
