import { Component, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular';;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inscrireatelier',
  templateUrl: './inscrireatelier.page.html',
  styleUrls: ['./inscrireatelier.page.scss'],
})
export class InscrireatelierPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  inscrits = {};

  handlerMessage = '';
  roleMessage = '';

  initiation:any;

  constructor(public http: HttpClient, public formBuilder: FormBuilder, private alertController: AlertController,  private activeRoute: ActivatedRoute, private router: Router,) {
    this.myForm = this.formBuilder.group({

      prenom: ['', [Validators.required, Validators.minLength(3)]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required,

          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    })
    this.activeRoute.queryParams.subscribe(params =>{
      let item:any;
      item=this.router.getCurrentNavigation()?.extras.state;
      console.log(item.param1.id);
      this.initiation=item.param1;
    })
  }

  async confirmeInscrit() {
    const alert = await this.alertController.create({
      header: 'Voulez-vous confirmer votre inscription ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Oui',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';

            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json' );
            this.myForm.value.initiation_id=this.initiation.id;
            this.http.post("https://127.0.0.1:8000/api/newinscrit", this.myForm.value)
              .subscribe(data => {});
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  ngOnInit() {  }

}
