import {Component, Input} from "@angular/core";

@Component({
  selector:"card",
  templateUrl : "./card.html",
  styleUrls : ["./card.scss"]
})

export class Card {

  @Input('color') color : string;
  @Input('icon') icon : string;
  @Input('name') name : string;
  @Input('number') number : string;
  @Input('footerIcon') footerIcon : string;
  @Input('footerText') footerText : string;
}
