import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: 'favoris.page.html',
  styleUrls: ['favoris.page.scss']
})
export class favorisPage implements OnInit {
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