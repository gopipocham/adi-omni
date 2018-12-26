import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-dump',
  templateUrl: './input-dump.component.html',
  styleUrls: ['./input-dump.component.scss']
})
export class InputDumpComponent implements OnInit {
  numberOfNodes = ['4','8']
  maximumnodes = ['8','16']
  incrementsize = ['4']
  overalltime = ['120']
  optimizationLimit = ['10']
  testnodes : any = {};
  @Output() postNodeValues = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  runNewTest() {
    this.postNodeValues.emit(this.testnodes);
    console.log(this.testnodes);
}
}
