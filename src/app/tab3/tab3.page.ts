import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  favorites: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    const favoritesData = localStorage.getItem('favorites');
    if (favoritesData) {
      this.favorites = JSON.parse(favoritesData);
    }
  }

  removeFavorite(favorite: any) {
    const index = this.favorites.findIndex((fav: any) => fav.id === favorite.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}
