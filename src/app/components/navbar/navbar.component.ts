import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name: string = 'Galería'
  public menu: Array<string> = ['home', 'informacion', 'about', 'contact',]

  constructor() { }

  ngOnInit(): void {
  }

}
