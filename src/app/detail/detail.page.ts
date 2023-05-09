import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  lsthackathons: any;
  lstevents: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      let item: any;
      let navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        item = navigation.extras.state;
        this.lsthackathons = item.param1;
      }

      this.http
        .get('https://127.0.0.1:8000/api/hackathon/' + item.param1.id + '/evenements')
        .subscribe(data => {
          this.lstevents = data;
        });
    });
  }

  voirinitiation(item: any) {
    let navExtra: NavigationExtras = {
      state: {
        param1: item
      }
    };
    this.router.navigate(['/initiation'], navExtra);
  }

  isPlacedispo(nb: any, max: any) {
    return nb < max;
  }

  InscInit(item: any) {
    let navExtra: NavigationExtras = {
      state: {
        param1: item,
      },
    };
    this.router.navigate(['/inscrireatelier'], navExtra);
  }
}
