import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  users: User[];

  cols: any[];
  ngOnInit() {
    this.users = [
      { id: '1', name: 'kiran', email: 'kiran@gmail.com', phone: '111' },
      { id: '2', name: 'tom', email: 'tom@gmail.com', phone: '222' },
      { id: '3', name: 'john', email: 'john@gmail.com', phone: '333' },
      { id: '4', name: 'Frank', email: 'frank@gmail.com', phone: '444' },

    ];
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
    ];
  }
}

export interface User {
  id;
  name;
  email;
  phone;
}