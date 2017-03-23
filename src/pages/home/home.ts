import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
//Importamos el servicio de People Service
import { PeopleService } from '../../providers/people-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleService]
})
export class HomePage {
  loading : Loading;
  registerCredentials = {email: '', password: ''};

  //users como un array vacio
  users: any[] = [];

  
  constructor(
      public navCtrl: NavController,
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
      public peopleservice: PeopleService
    ) {
    this.get_fromOreka;
  }
      //se llama el metodo load del service y se guarda dentro de users

  public login(){
    this.get_fromOreka();
  }

  public get_fromOreka(){

    let data_user = 'conductor2@conductor.com';

    this.peopleservice.load()
    .then(data => {
      this.users = data;
        console.log(data);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content : 'Espere  por favor'
    });
    this.loading.present();
  }
}
