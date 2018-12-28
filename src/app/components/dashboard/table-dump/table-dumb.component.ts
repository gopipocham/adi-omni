import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface PeriodicElement {
  // equipments: number;
  // iterationcount: number;
  // noofpipe: number;
  // throughput: number;
  // objects: number;
  // equivalencyrules: number;
  // equivalency: string;
  // timeout: string;
  // equipment: number;
  // pipe:number;
  // equivalencyTime:number;
  // totaltime:number
  iterationcount: number;
  equipments: number;
  lines:number;
  numberOfObjects: number;
  numberOfRulesChecked: number;
  equivalency: string;
  isTimedOut: string;
  equipmentPlacementTime: number;
  pipeRouterTime: number;
  equivalencyTime: number;
  totalElpsedTime: number;
  throughput: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-table-dump',
  templateUrl: './table-dumb.component.html',
  styleUrls: ['./table-dumb.component.scss']
})
export class TableDumpComponent implements OnInit {
  displayedColumns: string[] = ['iterationcount','equipments', 'lines','numberOfObjects', 'numberOfRulesChecked','equivalency','isTimedOut','equipmentPlacementTime','pipeRouterTime','equivalencyTime','totalElpsedTime','throughput'];
  dataSource: any[];
  totalobj = {};
  constructor() { }
  @Input() testdata: any;
  @Output() emitTabChangeEvent = new EventEmitter();
  ngOnInit() {
    console.log(this.testdata);
  }
  ngOnChanges() {
    console.log(this.testdata);
    this.dataSource = this.testdata;
    if ( this.testdata) {
      this.totalobj = this.testdata[this.testdata.length-1];
      console.log(this.totalobj);
      this.dataSource.splice(-1,1)
    }
  }
  dispatchTabChangeEvent(){
    this.emitTabChangeEvent.emit(0);
  }
}
