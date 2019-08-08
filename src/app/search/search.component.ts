import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
Data;
  constructor(public http: HttpClient, public router: Router ) { }

  ngOnInit() {
    this.Data = new FormGroup(
      {
        bookName: new FormControl(),
        authorName: new FormControl(),
        editions: new FormControl()

      }
    );
  }
  submitData() {
    this.http.post('https://5d47b117992ea9001444c9af.mockapi.io/users', this.Data.value)
    .toPromise()
    .then(response => {
      this.Data = response ;
      this.router.navigate(['']);
    },
    error => {
      console.log('error');
    }
    );
  }
}
