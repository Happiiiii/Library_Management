import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deletes;

  constructor(public http: HttpClient, public route: Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.http.get('https://5d47b117992ea9001444c9af.mockapi.io/users')
    .toPromise()
    .then(
      response => {
      this.deletes = response;
      this.route.navigate(['delete']);
      },
      error => {
      console.log('error');
      }
    );
  }


deleteBook(id) {
  const result = confirm('Are you Sure?');
  if (result === true) {
    this.http.delete(`https://5d47b117992ea9001444c9af.mockapi.io/users/${id}`)
    .toPromise()
    .then(response => {
      console.log(response);
      this.loadData();
    },
    error => {
      console.log(error);
    }
    );
  }
}
}
