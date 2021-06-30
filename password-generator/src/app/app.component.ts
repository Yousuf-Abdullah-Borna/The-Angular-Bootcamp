import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passwordLength:number = 0;
  includeLetters:boolean =false;
  includeNumbers:boolean =false;
  includeSymbols:boolean =false;
  password:string="";
  test: string = "";



  onChangeLength(value:string){

     const parsedValue = parseInt(value);
     
      this.passwordLength = parsedValue;

}


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
