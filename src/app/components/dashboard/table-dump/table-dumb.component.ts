import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  equipmentnumber: number;
  iterationcount: number;
  noofpipe: number;
  throughput: number;
  objects: number;
  equivalencyrules: number;
  equivalency: string;
  timeout: string;
  equipment: number;
  pipe:number;
  equivalencyTime:number;
  totaltime:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},
  {iterationcount: 1, equipmentnumber: 4, noofpipe: 10, objects:14, equivalencyrules:106, equivalency: 'Y', timeout:' N',equipment:4,pipe:0,equivalencyTime:0 ,totaltime:0.07, throughput: 334},

];

@Component({
  selector: 'app-table-dump',
  templateUrl: './table-dumb.component.html',
  styleUrls: ['./table-dumb.component.scss']
})
export class TableDumpComponent implements OnInit {
  displayedColumns: string[] = ['iterationcount', 'equipmentnumber', 'noofpipe','objects', 'equivalencyrules','equivalency','timeout','equipment','pipe','equivalencyTime','totaltime','throughput'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
