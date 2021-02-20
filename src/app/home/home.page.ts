import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items:any;

  constructor() {
    this.items = [
      {title: 'Slide item1'},
      {title: 'Slide item2'},
      {title: 'Slide item3'},
      {title: 'Slide item4'},
      {title: 'Slide item5'},
      {title: 'Slide item6'}
  ];
  }

  removeItem(item){
    // evento.detail.ratio = 0
    for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }

  teste(evento: CustomEvent){
    console.log('Oi Bruno, segue o evento: ', evento)
    console.log('Ratio', evento.detail.ratio)

  }

  teste2(evento){
    console.warn('Entrei no swipe')
    evento.detail.ratio = 0
  }
}
