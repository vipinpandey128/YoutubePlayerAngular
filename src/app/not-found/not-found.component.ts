import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
 import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  // selectedFile: File = null;
  // fb;
  // downloadURL: Observable<string>;
  constructor(
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }
  // save(product) {
  //   // if (this.id)
  //   //   this.productService.update(this.id, product);
  //   // else
  //   //   this.productService.create(product);

  //   // this.router.navigate(['/admin/products']);

  //   // console.log(this.form.value)
  // }

  // onFileSelectedOne(event) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb =url
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }
}
