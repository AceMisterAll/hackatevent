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

  addToFavorites() {
    this.storage.get('favorites').then(favorites => {
      const updatedFavorites = favorites || [];
      const isFavorite = updatedFavorites.some((fav: any) => fav.id === this.lsthackathons.id);

      if (!isFavorite) {
        updatedFavorites.push(this.lsthackathons);
        this.storage.set('favorites', updatedFavorites);
        this.hideAddToFavoritesButton(); // Masquer le bouton
      }
    });
  }

  hideAddToFavoritesButton() {
    const addToFavoritesButton = document.getElementById('addToFavoritesButton');
    if (addToFavoritesButton) {
      this.renderer.setStyle(addToFavoritesButton, 'display', 'none');
    }
  }
}
