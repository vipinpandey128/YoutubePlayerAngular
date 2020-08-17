import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  product: any = {};
  events$:any ={};
  model;
  id;


  constructor(
    private storage: AngularFireStorage,
    private productService: DataService,
    private router: Router,
    private af: AngularFireStorage,
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.productService.get(this.id).subscribe(p => this.product = p); }
    console.log(this.id)
  }

 

 
  ngOnInit(): void {
  }

  save(product) {
    if (this.id)
      this.productService.update(this.id, product);
    else
      this.productService.create(product);

    // this.router.navigate(['/admin/products']);

  }

  events(product) {
    if (this.id)
      this.productService.updateEvents(this.id, product);
    else
      this.productService.createEvents(product);

    // this.router.navigate(['/admin/products']);

  }

  special(product) {
    if (this.id)
      this.productService.updateSpecialEvents(this.id, product);
    else
      this.productService.createSpecialEvents(product);

    // this.router.navigate(['/admin/products']);

  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?'))
      return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  // upload(event) {
  //   const id = Math.random().toString(36).substring(2);
  //   this.ref = this.afStorage.ref(id);
  //   this.task = this.ref.put(event.target.files[0]);
  //   this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  //   this.uploadProgress = this.task.percentageChanges();
  //   this.downloadURL = this.task.downloadURL();
  // }

  onFileSelectedOne(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb =url
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }



}
