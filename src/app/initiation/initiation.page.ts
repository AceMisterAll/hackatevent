import { Component, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-initiation',
  templateUrl: './initiation.page.html',
  styleUrls: ['./initiation.page.scss'],
})
export class InitiationPage implements OnInit {
  nameIcon = 'star-outline';
  uneinitiation: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private renderer: Renderer2,
    private storage: Storage,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      let item: any;
      let navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        item = navigation.extras.state;
        this.uneinitiation = item.param1;
      }
    });


    let favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    let isFavorite = favorites.some((fav: any) => fav.id === this.uneinitiation.id);

    if (!isFavorite) {
      favorites.push(this.uneinitiation);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.nameIcon = 'star-outline';
    }
    else {
      this.nameIcon = 'star';
    }
  }

  addToFavorites() {
    let favorites: any[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (this.nameIcon == 'star-outline') {
      this.nameIcon = 'star';
      this.cd.detectChanges();
      favorites.push(this.uneinitiation);
    }
    else if(this.nameIcon == 'star') {

      let index = favorites.findIndex((fav: any) => fav.id === this.uneinitiation.id);
      if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.nameIcon = 'star-outline';
        this.cd.detectChanges();
      }
    }
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
