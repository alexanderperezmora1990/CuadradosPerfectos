import { Injectable } from '@angular/core';
import { PerfectSquare } from '../models/square';
import { NumberSquare } from '../models/number';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PerfectSquareService {


  constructor() {
  }

  private Square(sumatory: number) {
   if (Math.sqrt(sumatory) % 1 === 0) {
        return true;
    } else {
        return false;
    }
  }


  private Summatory(numberView: number) {
    let result = 0;
    for (let index = 1; index <= numberView; index++) {
        if (numberView % index === 0) {
            result = result + Math.pow(index, 2);
        }
    }
    return result;
  }

  private GetSquare(range: NumberSquare) {
    console.log(range);
    const arraySquare: PerfectSquare[] = [];
    for (let index: any = range.numberOne; index <= Number(range.numberTwo); index++) {
      const sumatory: number = this.Summatory(index);
      if (this.Square(sumatory)) {
        const square: PerfectSquare = new PerfectSquare(index, sumatory);
        arraySquare.push(square);
      }
    }
    return arraySquare;
  }

  public GetPerfectSquare(range: NumberSquare) {
    const squareObservable = new Observable( observer => {
      observer.next(this.GetSquare(range));
    });
    return squareObservable;
  }

}
