import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookContent;


  constructor(public http: HttpClient, public activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://5d47b117992ea9001444c9af.mockapi.io/users')
    .toPromise()
    .then((response) => {
      this.bookContent = response;
    },
    (error) => {
      console.log('error');
    }
    )
  }

}
