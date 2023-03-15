import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent {

  list_last_news: Post[] = []

  constructor(private data_service: DataService){
    this.data_service.getLastNews().subscribe({next: value => {
      this.list_last_news = value;
    }, error(err) {
      console.log(err);
    },})
  }

}
