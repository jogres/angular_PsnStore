import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameTipe:string=""
  @Input()
  gamePrice:String=""

  constructor() { }

  ngOnInit(): void {
  }

}
