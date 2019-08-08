import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
Data;
  constructor(public router: Router, public http: HttpClient, public activatedroute: ActivatedRoute) {
    this.Data = new FormGroup({
      bookName: new FormControl(),
      authorName: new FormControl(),
      editions: new FormControl()
    });
  }

  ngOnInit() {
    this.http.get(`https://5d47b117992ea9001444c9af.mockapi.io/users/${this.activatedroute.snapshot.paramMap.get('id')}`)
    .toPromise()
     .then((response: any) => {
       this.Data.setValue({
         bookName: response.bookName,
         authorName: response.authorName,
         editions: response.editions
       },
       error => {
         console.log('error');
       }
       );
     });
  }
submitFromData() {
  this.http.put(`https://5d47b117992ea9001444c9af.mockapi.io/users/${this.activatedroute.snapshot.paramMap.get('id')}`,
  this.Data.value)
  .toPromise()
  .then(response => {
    console.log(response);
    this.router.navigate(['list']);
  },
  error => {
    console.log('error');
  }
  );
}
}
