import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private db:AngularFirestore) { 


    
  }

  // go() {
  //   return this.db.collection('MotelLocations').valueChanges()
  // }

  getLocations() {
    return this.db.collection('MotelsInfo').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {... a.payload.doc.data() as {} };
      }))
    );
  }
}
