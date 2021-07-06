import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentPage =0;

  images = [
    
    {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'At the Beach',
    url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
       
  },
  {

    title: 'THE UNITED STATES OF AMERICA',
    url:'https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'The Status of Liberty',
    url:'https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  },
  {

    title: 'Bangladesh',
    url:'https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    
       
  }


]

checkWindowIndex(index: number){

      return Math.abs(this.currentPage - index) <5;
}


}
