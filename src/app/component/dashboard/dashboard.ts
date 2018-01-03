import {Component} from "@angular/core";

@Component({
  selector : 'dashboard',
  templateUrl : "./dashboard.html",
  styleUrls : ["./dashboard.scss"]
})

export class Dashboard {

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
  ]

}
