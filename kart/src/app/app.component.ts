import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CardComponent]
})
export class AppComponent {

  posts = [
    {
      title: 'dağ bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'dpdağ',
      content: 'çok hızlı sürdüm'
    },
    {
      title: 'tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'dpuludağ',
      content: 'bugün iy tırmandım'
    },
    {
      title: 'doğa ürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'dpdoğa',
      content: 'ağaca çıktım'
    }
  ]


}
