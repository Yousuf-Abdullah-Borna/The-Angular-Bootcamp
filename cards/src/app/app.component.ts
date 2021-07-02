import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
    title:"neat tree",
    imageUrl: 'assets/tree.jpeg',
    username:'nature',
    content:'I saw this neat tree today'
  },
  {
    title:"Snowy mountain",
    imageUrl: 'assets/mountain.jpeg',
    username:'Mountain man',
    content:'Here is a picture of snowy mountain'
  },
  {
    title:"Biking !",
    imageUrl: 'assets/biking.jpeg',
    username:'Roton',
    content:'I love biking'
  }

]
}
