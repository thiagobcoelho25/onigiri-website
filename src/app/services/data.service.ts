import { Injectable } from '@angular/core';
import { delay, map, Observable, of, take } from 'rxjs';
import { Post } from '../shared/interfaces/post';

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

  getCarouselSliderNews(): Observable<Post[]> {
    return of([{
      title_post: 'CS:GO: Canal de FalleN no YouTube é hackeado',
      url_post: 'assets/images/fallen.jpg',
      date_post: '20/01/2023',
      description_post: 'A conta no YouTube de FalleN foi hackeada na tarde desta sexta-feira (20). O canal fallenINSIDER, que o Verdadeiro usa para publicar seus vídeos, sofreu com ataque e exibe uma live para aplicar golpes com criptomoedas.'
    },
    {
      title_post: 'Netflix libera jogo mobile das Tartarugas Ninja de graça para assinantes',
      url_post: 'assets/images/teenage-shreeders.jpg',
      date_post: '20/01/2023',
      description_post: 'Teenage Mutant Ninja Turtles: Shredder’s Revenge, game da Tartarugas Ninja lançado em 2022, agora pode ser jogado no celular ...'
    },
    {
      title_post: 'Life is Strange, Devil May Cry 5, Back 4 Blood e mais chegam à PS Plus em janeiro', url_post: 'assets/images/before-the-storm.png',
      date_post: '06/01/2023', description_post: 'A Sony divulgou ontem (11) a lista de jogos que serão adicionados aos catálogos da PS Plus Extra e Deluxe ainda em janeiro.'
    }
    ]).pipe(take(1));
  }

}
