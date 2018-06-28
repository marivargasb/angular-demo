import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title: string;
  myHero: string;

  constructor() {

  
   }

  ngOnInit() {
  }



  
}
