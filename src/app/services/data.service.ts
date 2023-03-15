import { Injectable } from '@angular/core';
import { delay, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getTicketNews(): Observable<string[]> {
    return of(
      ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Aliquam consequat varius consequat.",
        "Aliquam consequat varius consequat."]).pipe(delay(2000), take(1));
  }

}
