import {Component} from "@angular/core";

@Component({
  selector : 'dashboard',
  templateUrl : "./dashboard.html",
  styleUrls : ["./dashboard.scss"]
})

export class Dashboard{

  card = [
    {
      color : 'orange',
      icon : 'weekend',
      name: 'Bookings',
      number : 182,
      footerIcon : 'warning',
      footerText : 'Get More Space...'
    },
    {
      color : 'red',
      icon : 'equalizer',
      name: 'Views',
      number : 75.521,
      footerIcon : 'local_offer',
      footerText : 'Google Analytics'
    },
    {
      color : 'green',
      icon : 'store',
      name: 'Revenue',
      number : '$3,245',
      footerIcon : 'date_range',
      footerText : 'Last 24 Hours'
    },
    {
      color : 'blue',
      icon : 'store',
      name: 'Followers',
      number : '+245',
      footerIcon : 'update',
      footerText : 'Just Updated'
    }
  ];

  //Chart Daily Sales
  single: any[] = [
    {
      "name": 'M',
      "value": 1
    },{
      "name": 'T',
      "value": 1
    },{
      "name": 'W',
      "value": 1
    },{
      "name": 'T',
      "value": 1
    },{
      "name":  'F',
      "value": 1
    },{
      "name": 'S',
      "value": 1
    },{
      "name": 'S',
      "value": 1
    },
  ];
  multi: any[];

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    // Object.assign(this, this.single)
  }

  onSelect(event) {
    console.log(event);
  }
}
