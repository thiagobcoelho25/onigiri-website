import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY, iif, of, switchMap, take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
    selector: 'app-info-news',
    templateUrl: './info-news.component.html',
    styleUrls: ['./info-news.component.css'],
    standalone: false
})
export class InfoNewsComponent {

  post: Post | null = null

  constructor(private actived_route: ActivatedRoute, private data_service: DataService, private router: Router){

    // function from chatGPD, need revision for better understand
    this.actived_route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.data_service.getSpecificNews(+id).pipe(
            switchMap(data => {
              if (data) {
                return of(data);
              } else {
                this.router.navigate(['/not-found']);
                return of(null);
              }
            })
          );
        } else {
          this.router.navigate(['/not-found']);
          return of(null);
        }
      })
    ).subscribe({next: value => {
      this.post = value;
      console.log(value)
    },});
  }

}
