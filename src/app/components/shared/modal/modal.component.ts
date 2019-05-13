import { Component, OnInit, Input } from '@angular/core';
import { PerfectSquare } from '../../../models/square';
import { NumberSquare } from '../../../models/number';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() rangeSquare: NumberSquare;
  @Input() arraySquare: PerfectSquare[];
  constructor() { }

  ngOnInit() {
  }

}
