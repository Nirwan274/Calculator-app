import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  subDisplayText = '';
  mainDisplayText = '';
  operand1!: number;
  operand2!: number;
  operand3!: number;
  operand4!: number;
  operator = '';
  calculationString = '';
  answered = false;

  operatorSet = false;

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+'|| key === 'Factorial'|| key === 'Prime') {
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+'|| lastKey === 'Factorial'|| lastKey === 'Prime') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainDisplayText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }
  getAnswer() {
    this.calculationString = this.mainDisplayText;
    if(this.operator === '+' ||this.operator=== '-'||this.operator=== '*'||this.operator=== '/')

    {this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);}

    if (this.operator === '/') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === '+') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    }
    if (this.operator === 'Factorial') {
      var factorial = calcFact(this.operand1);
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (factorial).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    }
    else if (this.operator === 'Prime') {

      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (isPrime(this.operand1));
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    }
    else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }
}
function isPrime(num: number) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return 'Not Prime';
  return 'Prime';
}
function calcFact( num: number )
      {
      var i;
      var fact = 1;
      for( i = 1; i <= num; i++ )
      {
      fact = fact * i;
      }
      return fact;
      }
