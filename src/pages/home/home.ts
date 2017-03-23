import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Importamos el servicio de People Service
import { PeopleService } from '../../providers/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleService]
})
export class HomePage {
  //users como un array vacio
  users: any[] = [];

  constructor(
      public navCtrl: NavController,
      public peopleservice: PeopleService
    ) {
      //se llama el metodo load del service y se guarda dentro de users
      this.peopleservice.load()
      .then(data => {
        this.users = data;
          console.log(data);
      });
  }

}
