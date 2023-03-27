import { Component, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular';;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(public http: HttpClient, public formBuilder: FormBuilder, private alertController: AlertController) {
    this.myForm = this.formBuilder.group({

      prenom: ['', [Validators.required, Validators.minLength(3)]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required,

          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    })

    // select * from inscrit where email=*email and idEvent=*id


    this.http.get('https://127.0.0.1:8000/api/hackathon/1/evenements').subscribe(data => {
      this.initiation=data;
      console.log(data);
    });
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
            this.myForm.value.initiation_id=1;
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
