import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title:string = '';
  @Input() imageUrl:string = '';
  @Input() username:string = '';
  @Input() content:string = '';
  constructor() { }
  ngOnInit(): void {

  }
}




/*
eğer app module ts yoksa anguların standalone component yapısını kullanıyosun demektir
angular 15 ve sonrasında gelen bu yapıda mgmodule zorunlu değil
standalone:true diyosun o yüzdden


*/