import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://i.picsum.photos/id/1001/640/480.jpg?hmac=lV5xFJeR4uL47-V2ZcYC8y0utFfvhOQp5lOr4vzdLZA'
    },
    {
      title: 'The Forest',
      url: 'https://i.picsum.photos/id/1023/640/480.jpg?hmac=-tjGX1ptCnsU-sNkFw0ey3Jl6FEl0sPILb7zn--sG54'
    },
    {
      title: 'Dried Land',
      url: 'https://i.picsum.photos/id/1028/640/480.jpg?hmac=5sypo2ZTqdiqAi5pWxOTX0J-JJG05XczD6zvjhpaKtQ'
    },
    {
      title: 'Town Park',
      url: 'https://i.picsum.photos/id/1029/640/480.jpg?hmac=ABjmuVJ58Rjbr3nWRsSY0vRJ6xQRt9HAb96asFKCO7Q'
    },
    {
      title: 'On the Rock\'s Edge',
      url: 'https://i.picsum.photos/id/1006/640/480.jpg?hmac=2Mb7OFpuTtCs4GrwVf7wu3BQYjNEpeGlhViQzNLTua4'
    },
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 3;
  }

}
