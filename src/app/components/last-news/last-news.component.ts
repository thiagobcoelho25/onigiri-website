import { Component } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent {


  list_last_news: Post[] = [{
    title_post: 'CS:GO: Canal de FalleN no YouTube é hackeado',
    url_post: 'assets/images/fallen.jpg',
    date_post: '20/01/2023'
  },
  {
    title_post: 'Life is Strange, Devil May Cry 5, Back 4 Blood e mais chegam à PS Plus em janeiro', url_post: 'assets/images/before-the-storm.png',
    date_post: '06/01/2023'
  },
  {
    title_post: 'Netflix libera jogo mobile das Tartarugas Ninja de graça para assinantes',
    url_post: 'assets/images/teenage-shreeders.jpg',
    date_post: '20/01/2023'
  },
  {
    title_post: 'The King of Fighters XV: SNK revelou Shingo Yabuki como novo lutador do jogo', url_post: 'assets/images/shingo-yabuki.webp',
    date_post: '06/01/2023'
  },
  {
    title_post: 'Avatar Generations: jogo mobile inicia pré-registro global', url_post: 'assets/images/avatar-generations.jpg',
    date_post: '09/01/2023'
  },
  {
    title_post: 'Fairy Tail: dublagem chegou ontem ao HBO Max Brasil',
    url_post: 'assets/images/fairytail-hbo.webp',
    date_post: '10/01/2023'
  },
  {
    title_post: 'CS:GO: IEM Brazil é confirmada para abril deste ano pela ESL',
    url_post: 'assets/images/hltv-stadium.jpg',
    date_post: '10/01/2023'
  },
  {
    title_post: 'Homem-Formiga e a Vespa: Quantumania – Marvel Studios divulga novo trailer do longa', url_post: 'assets/images/Quantumania.webp',
    date_post: '06/01/2023'
  },
  {
    title_post: 'Hades 2 terá legendas em português do Brasil, aponta vaga de emprego', url_post: 'assets/images/hadesii.jpg',
    date_post: '09/01/2023'
  },
  {
    title_post: 'Homem-Aranha Noir não estará no novo Aranhaverso, diz Nicolas Cage', url_post: 'assets/images/spidernoir.jpg',
    date_post: '06/01/2023'
  },
  {
    title_post: 'League of Legends: Annie receberá mudanças em sua passiva no patch 13.2', url_post: 'assets/images/annie.jpg',
    date_post: '06/01/2023'
  },
  {
    title_post: 'The Vexations of a Shut-In Vampire Princess: light novel ganhará adaptação em anime', url_post: 'assets/images/the-vexations.jpg',
    date_post: '06/01/2023'
  }
  ]


}
