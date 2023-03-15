import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ticker-news',
  templateUrl: './ticker-news.component.html',
  styleUrls: ['./ticker-news.component.css']
})
export class TickerNewsComponent implements OnInit {
  /* (D) ANIMATION - MOVE ITEMS FROM RIGHT TO LEFT */
  /* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
  /* @keyframes tickerh {
    0% { transform: translate3d(100vw, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
  }
  .hmove { animation: tickerh linear 15s infinite; }
  .hmove:hover { animation-play-state: paused; } */

  /*Tentei utilizar interpolação mas sem sucesso.
  Tambem tentei utilizar viewChild, mas retorno undefined devido ao NgIf*/

  list_of_news: string[] = []
  speed_of_news: number = 15

  constructor(private data_service: DataService) {

  }

  ngOnInit(): void {
    this.data_service.getTicketNews().subscribe({next: value => {
      this.list_of_news = value;
    },  error: err => {
      console.log(err)
    }})
  }

}
