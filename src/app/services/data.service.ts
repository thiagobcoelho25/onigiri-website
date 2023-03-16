import { Injectable } from '@angular/core';
import { delay, map, Observable, of, take } from 'rxjs';
import { Category } from '../shared/interfaces/category';
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
      id: 2,
      title_post: 'CS:GO: Canal de FalleN no YouTube é hackeado',
      url_post: 'assets/images/fallen.jpg',
      date_post: '20/01/2023',
      description_post: 'A conta no YouTube de FalleN foi hackeada na tarde desta sexta-feira (20). O canal fallenINSIDER, que o Verdadeiro usa para publicar seus vídeos, sofreu com ataque e exibe uma live para aplicar golpes com criptomoedas.'
    },
    {
      id: 3,
      title_post: 'Netflix libera jogo mobile das Tartarugas Ninja de graça para assinantes',
      url_post: 'assets/images/teenage-shreeders.jpg',
      date_post: '20/01/2023',
      description_post: 'Teenage Mutant Ninja Turtles: Shredder’s Revenge, game da Tartarugas Ninja lançado em 2022, agora pode ser jogado no celular ...'
    },
    {
      id: 7,
      title_post: 'Life is Strange, Devil May Cry 5, Back 4 Blood e mais chegam à PS Plus em janeiro', url_post: 'assets/images/before-the-storm.png',
      date_post: '06/01/2023', description_post: 'A Sony divulgou ontem (11) a lista de jogos que serão adicionados aos catálogos da PS Plus Extra e Deluxe ainda em janeiro.'
    }
    ]).pipe(take(1));
  }

  getCategorySectionsNews(): Observable<Category[]>{
    return of([{
      id: 1,
      title_category: 'Animes & HQs',
      title_post: 'Fairy Tail: dublagem chegou ontem ao HBO Max Brasil',
      url_post: 'assets/images/fairytail-hbo.webp',
      date_post: '10/01/2023',
      description_post: 'Após ser revelado que houve uma redublagem em Fairy Tail, foi divulgado neste sábado (7) que a nova dublagem do anime chegará ...',
      minor_posts: [{
        id: 4,
        title_post: 'The Vexations of a Shut-In Vampire Princess: light novel ganhará adaptação em anime', url_post: 'assets/images/the-vexations.jpg',
        date_post: '06/01/2023'
      },{
        id: 5,
        title_post: 'Goblin Slayer: 2ª temporada ganha novo trailer de lançamento', url_post: 'assets/images/goblin-slayer.webp',
        date_post: '06/01/2023'
      },{
        id: 6,
        title_post: 'Naruto: episódios finais do Clássico estreiam no HBO Max', url_post: 'assets/images/naruto-hbomax.webp',
        date_post: '09/01/2023'
      }]
    },
    {
      id: 2,
      title_category: 'Video Games',
      title_post: 'CS:GO: Canal de FalleN no YouTube é hackeado',
      url_post: 'assets/images/fallen.jpg',
      date_post: '20/01/2023',
      description_post: 'A conta no YouTube de FalleN foi hackeada na tarde desta sexta-feira (20). O canal fallenINSIDER, que o Verdadeiro usa para publicar seus vídeos, sofreu com ataque e exibe uma live para aplicar golpes com criptomoedas.',
      minor_posts: [{
        id: 7,
        title_post: 'Life is Strange, Devil May Cry 5, Back 4 Blood e mais chegam à PS Plus em janeiro', url_post: 'assets/images/before-the-storm.png',
        date_post: '06/01/2023'
      },{
        id: 8,
        title_post: 'The King of Fighters XV: SNK revelou Shingo Yabuki como novo lutador do jogo', url_post: 'assets/images/shingo-yabuki.webp',
        date_post: '06/01/2023'
      },{
        id: 9,
        title_post: 'Avatar Generations: jogo mobile inicia pré-registro global', url_post: 'assets/images/avatar-generations.jpg',
        date_post: '09/01/2023'
      }]
    },
    {
      id: 3,
      title_category: 'Filmes & Séries',
      title_post: 'Netflix libera jogo mobile das Tartarugas Ninja de graça para assinantes',
      url_post: 'assets/images/teenage-shreeders.jpg',
      date_post: '20/01/2023',
      description_post: 'Teenage Mutant Ninja Turtles: Shredder’s Revenge, game da Tartarugas Ninja lançado em 2022, agora pode ser jogado no celular ...',
      minor_posts: [{
        id: 10,
        title_post: 'Homem-Formiga e a Vespa: Quantumania – Marvel Studios divulga novo trailer do longa', url_post: 'assets/images/Quantumania.webp',
        date_post: '06/01/2023'
      },{
        id: 11,
        title_post: 'Homem-Aranha Noir não estará no novo Aranhaverso, diz Nicolas Cage', url_post: 'assets/images/spidernoir.jpg',
        date_post: '06/01/2023'
      },{
        id: 12,
        title_post: 'Vin Diesel aquece para trailer de Velozes e Furiosos 10 com nova foto de Dom Toretto', url_post: 'assets/images/vindiesel.jpg',
        date_post: '09/01/2023'
      }]
    }
  ]).pipe(take(1));
  }

  getLastNews(): Observable<Post[]> {
    return of([{
      id: 2,
      title_post: 'CS:GO: Canal de FalleN no YouTube é hackeado',
      url_post: 'assets/images/fallen.jpg',
      date_post: '20/01/2023',
      description_post: 'A conta no YouTube de FalleN foi hackeada na tarde desta sexta-feira (20). O canal fallenINSIDER, que o Verdadeiro usa para publicar seus vídeos, sofreu com ataque e exibe uma live para aplicar golpes com criptomoedas.'
    },
    {
      id: 7,
      title_post: 'Life is Strange, Devil May Cry 5, Back 4 Blood e mais chegam à PS Plus em janeiro', url_post: 'assets/images/before-the-storm.png',
      date_post: '06/01/2023'
    },
    {
      id: 3,
      title_post: 'Netflix libera jogo mobile das Tartarugas Ninja de graça para assinantes',
      url_post: 'assets/images/teenage-shreeders.jpg',
      date_post: '20/01/2023'
    },
    {
      id: 8,
      title_post: 'The King of Fighters XV: SNK revelou Shingo Yabuki como novo lutador do jogo', url_post: 'assets/images/shingo-yabuki.webp',
      date_post: '06/01/2023'
    },
    {
      id: 9,
      title_post: 'Avatar Generations: jogo mobile inicia pré-registro global', url_post: 'assets/images/avatar-generations.jpg',
      date_post: '09/01/2023'
    },
    {
      id: 1,
      title_post: 'Fairy Tail: dublagem chegou ontem ao HBO Max Brasil',
      url_post: 'assets/images/fairytail-hbo.webp',
      date_post: '10/01/2023'
    },
    {
      id: 13,
      title_post: 'CS:GO: IEM Brazil é confirmada para abril deste ano pela ESL',
      url_post: 'assets/images/hltv-stadium.jpg',
      date_post: '10/01/2023'
    },
    {
      id: 10,
      title_post: 'Homem-Formiga e a Vespa: Quantumania – Marvel Studios divulga novo trailer do longa', url_post: 'assets/images/Quantumania.webp',
      date_post: '06/01/2023'
    },
    {
      id: 14,
      title_post: 'Hades 2 terá legendas em português do Brasil, aponta vaga de emprego', url_post: 'assets/images/hadesii.jpg',
      date_post: '09/01/2023'
    },
    {
      id: 11,
      title_post: 'Homem-Aranha Noir não estará no novo Aranhaverso, diz Nicolas Cage', url_post: 'assets/images/spidernoir.jpg',
      date_post: '06/01/2023'
    },
    {
      id: 15,
      title_post: 'League of Legends: Annie receberá mudanças em sua passiva no patch 13.2', url_post: 'assets/images/annie.jpg',
      date_post: '06/01/2023'
    },
    {
      id: 4,
      title_post: 'The Vexations of a Shut-In Vampire Princess: light novel ganhará adaptação em anime', url_post: 'assets/images/the-vexations.jpg',
      date_post: '06/01/2023'
    }
    ]).pipe(take(1));
  }

  getSpecificNews(id: number): Observable<Post | null> {
    return this.getLastNews().pipe(map( (posts) =>{
      const post_exist = posts.find( ele => ele.id === id)

      if(post_exist){
        return post_exist
      }

      return null;

    } ))
  }

}
