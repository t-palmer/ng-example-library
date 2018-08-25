import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgExampleLibraryService {

  constructor() { }

  getData() {
    return 'NgExampleLibraryService';
  }
}
