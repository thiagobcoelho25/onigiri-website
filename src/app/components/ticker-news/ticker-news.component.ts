import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { delay, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-ticker-news',
  templateUrl: './ticker-news.component.html',
  styleUrls: ['./ticker-news.component.css']
})
export class TickerNewsComponent implements OnInit, AfterViewInit {
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

  api_call: Observable<string[]> = of(
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Aliquam consequat varius consequat.",
      "Aliquam consequat varius consequat."]).pipe(delay(2000), take(1));

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.api_call.subscribe({next: value => {
      this.list_of_news = value;
    },  error: err => {

    }})
    // this.list_of_news
  }

  ngAfterViewInit(): void {
  }

}
