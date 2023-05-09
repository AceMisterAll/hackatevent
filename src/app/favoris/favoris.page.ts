import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-favoris',
  templateUrl: 'favoris.page.html',
  styleUrls: ['favoris.page.scss']
})
export class favorisPage implements OnInit {
  favorites: any[] = [];

  constructor(
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    let favorisData = localStorage.getItem('favorites');
    this.favorites = JSON.parse(favorisData || '[]');
  }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  removeFavorite(favorite: any) {
    let index = this.favorites.findIndex((fav: any) => fav.id === favorite.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}
