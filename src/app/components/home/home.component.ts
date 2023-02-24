import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Mascota } from 'src/app/model/mascota';
import { RealtimedbService } from 'src/app/services/realtimedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  mascotas: any;
  mascota?: Mascota;
  mascotaIndex = -1;

  constructor(
    private realtimedbService: RealtimedbService,
  ) { }

  ngOnInit(): void {
    this.getDataPetsDB();
  }

  updatePets(): void {
    this.mascota = undefined;
    this.mascotaIndex = -1;
    this.getDataPetsDB();
  }

  getDataPetsDB(): void {
    this.realtimedbService.getAllPets().snapshotChanges().pipe(
      map(element =>
        element.map(ele => ({
          id: ele.payload.key, ...ele.payload.val()
        }))
      )
    ).subscribe(data => {
      this.mascotas = data;
    })
  }

  deletePet(id: string) {
    this.realtimedbService.deletePet(id)
      .then(
        () => {
          this.updatePets();
          this.realtimedbService.createLog(`Se eliminó la mascota con id:${id}`).then()
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }

  deleteAllPets(): void {
    this.realtimedbService.deleteAllPets()
      .then(
        () => {
          this.updatePets();
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }

  updatePet(id: string, mascota: Mascota): void {
    this.realtimedbService.updatePet(id, mascota).then(() => {
      this.realtimedbService.createLog(`Se actualizó la mascota de nombre:${mascota.nombre} con id:${id}`).then()
      this.mascota = new Mascota();
    })
  };

}
