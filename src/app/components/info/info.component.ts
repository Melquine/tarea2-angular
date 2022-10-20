import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public newName: string = ''
  public languajes: Array<string> = ['JavaScript', 'TypeScript','HTML', 'CSS', 'Bootstrap', 'SASS', 'Angular', 'React.js']
  public setImage: boolean = true
  
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetector.detectChanges()
  }

  programmerName(name:string): void {

    this.newName = name

  }

  showImage() {
   
    this.setImage ? this.setImage = false : this.setImage = true

  }
}
