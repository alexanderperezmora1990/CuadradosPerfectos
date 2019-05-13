import { Component, OnInit } from '@angular/core';
import { NumberSquare } from '../../models/number';
import { PerfectSquareService } from '../../services/perfect-square.service';
import { PerfectSquare } from '../../models/square';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {

  arraySquare: PerfectSquare[];
  rangeSquare: NumberSquare = new NumberSquare();

  constructor( private squareService: PerfectSquareService ) { }

  ngOnInit() {
  }

  GetPerfectSquuare(numbers: NumberSquare) {
   this.rangeSquare = numbers;
   this.squareService.GetPerfectSquare(numbers).subscribe( (squares: PerfectSquare[]) => {
      this.arraySquare = squares;
   });
  }

}
