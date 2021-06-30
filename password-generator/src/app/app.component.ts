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

    const numbers ='1234567890';
    const letters ='abcdefghijklmnopqrstuvwyz';
    const symbols ='!@#$%^&*(()+_*/?><.,';
   
     
    let validChars = '';

    if(this.includeLetters){

      validChars+= letters;

    }


    if(this.includeNumbers){

      validChars+= numbers;

    }

    if(this.includeSymbols){

      validChars+= symbols;
    }


    let generatedPassword ='';

    for( let i=0; i<this.passwordLength; i++){

         const index = Math.floor(Math.random() * validChars.length);

         generatedPassword += validChars[index];
    }


    this.password= generatedPassword;

    

  }
}
