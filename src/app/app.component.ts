import { Component, OnInit } from '@angular/core';
import { NgExampleLibraryService } from 'ng-example-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-example-library-app';
  serviceData = '';

  constructor (
    private ngExampleLibraryService: NgExampleLibraryService
  ) {}

  ngOnInit(): void {
    this.serviceData = this.ngExampleLibraryService.getData();
  }
}
