import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from './modals/data';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  // landing
  create(product) {
    return this.db.list('/landing').push(product);
  }

  update(id, product) {
    return this.db.object('/landing/' + id).update(product);
  }


  getAll(): Observable<Product[]> {
    return this.db.list<Product>('/landing')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        )
      );
  }
  get(productId): Observable<Product> {
    return this.db.object<Product>('/landing/' + productId)
      .valueChanges()
      .pipe(take(1));
  }
  delete(productID) {
    return this.db.object('/landing/' + productID).remove();
  }

    // events

    createEvents(product) {
      return this.db.list('/events').push(product);
    }
    updateEvents(id, product) {
      return this.db.object('/events/' + id).update(product);
    }
    getEvents(): Observable<Product[]> {
      return this.db.list<Product>('/events')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        )
      );
    }

  getEvent(productId): Observable<Product> {
    return this.db.object<Product>('/events/' + productId)
      .valueChanges()
      .pipe(take(1));
  }


  //  special Events

  createSpecialEvents(product) {
    return this.db.list('/specialevents').push(product);
  }
  updateSpecialEvents(id, product) {
    return this.db.object('/specialevents/' + id).update(product);
  }
  getSpecialEvents(): Observable<Product[]> {
    return this.db.list<Product>('/specialevents')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
      )
    );
  }

getSpecialEvent(productId): Observable<Product> {
  return this.db.object<Product>('/specialevents/' + productId)
    .valueChanges()
    .pipe(take(1));
}


}
