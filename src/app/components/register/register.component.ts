import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { RealtimedbService } from 'src/app/services/realtimedb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mascota: Mascota = new Mascota();

  constructor(private realtimedbService: RealtimedbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  savePet(): void {
    this.realtimedbService.createPet(this.mascota).then(() => {
      this.realtimedbService.createLog(`Se agregó la mascota de nombre:${this.mascota.nombre}`).then()
      this.mascota = new Mascota();
      this.router.navigate(['../'])
    })
  };

}
