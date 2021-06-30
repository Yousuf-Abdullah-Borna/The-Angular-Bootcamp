import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters:boolean =false;
  includeNumbers:boolean =false;
  includeSymbols:boolean =false;
  password:string="";
  test: string = "";


 onChangeUseLetters(){

this.includeLetters = !this.includeLetters;

 }

 onChangeUseNumbers(){

     this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){

    this.includeSymbols = !this.includeSymbols;
  }



  onButtonClick(){

    
   

    this.password= "SUMAYA YEACIN" ;

    

  }
}
