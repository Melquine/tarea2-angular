import { Component, OnInit } from '@angular/core';
import * as dataRaw from '.././../core/data/imgData.json'
import { ImgInterface } from 'src/app/interfaces/imgInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: ImgInterface[] = []

  constructor() { }

  ngOnInit(): void {
    const { data } = (dataRaw as any).default
    this.images = data

  }

}
