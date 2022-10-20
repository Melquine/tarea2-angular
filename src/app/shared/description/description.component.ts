import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Output() name= new EventEmitter<string>()
  @Input() tecnologias: Array<string> = []

  public developer: string = ''

  constructor() { }

  ngOnInit(): void {

    this.name.emit('Melquicedec Núñez')

  }

}
