import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feature } from '../interfaces/feature'

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  //////////////
  // Subjects //
  //////////////
  public toolbarSubject: Subject<Feature> = new Subject<Feature>()

  constructor() { }
}
