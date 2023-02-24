import { Injectable } from '@angular/core';

import { Mascota } from '../model/mascota';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})

export class RealtimedbService {

  private dbLogs = '/logs';

  private dbPets = '/mascotas';

  myPetsRef: AngularFireList<Mascota>;
  myLogsRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.myPetsRef = db.list(this.dbPets);
    this.myLogsRef = db.list(this.dbLogs);
  }

  //Para las mascotas

  getAllPets(): AngularFireList<Mascota> {
    return this.myPetsRef;
  }

  createPet(mascota: Mascota): any {
    return this.myPetsRef.push(mascota);
  }

  updatePet(id: string, value: any): Promise<void> {
    return this.myPetsRef.update(id, value);
  }

  deletePet(id: string): Promise<void> {
    return this.myPetsRef.remove(id);
  }

  deleteAllPets(): Promise<void> {
    return this.myPetsRef.remove();
  }


  //Para los Logs

  getAllLogs(): AngularFireList<any> {
    return this.myLogsRef;
  }
  createLog(log: any): any {
    return this.myLogsRef.push(log);
  }
}
