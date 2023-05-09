import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

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
    private renderer: Renderer2,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.create();
    this.activeRoute.queryParams.subscribe(params => {
      let item: any;
      item = this.router.getCurrentNavigation()?.extras.state;
      this.lsthackathons = item.param1;

      this.http
        .get('https://127.0.0.1:8000/api/hackathon/' + item.param1.id + '/evenements')
        .subscribe(data => {
          this.lstevents = data;
        });
    });

    let favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    let isFavorite = favorites.some((fav: any) => fav.id === this.lsthackathons.id);
    let btn_favoris = document.getElementById('addToFavoritesButton');

    if (!isFavorite) {
      favorites.push(this.lsthackathons);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.renderer.setStyle(btn_favoris, 'display', 'flex');
    }
    else {
      this.renderer.setStyle(btn_favoris, 'display', 'none');
    }
  }

  addToFavorites() {
    let favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    let btn_favoris = document.getElementById('addToFavoritesButton');
    this.renderer.setStyle(btn_favoris, 'display', 'none');
    favorites.push(this.lsthackathons);
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
