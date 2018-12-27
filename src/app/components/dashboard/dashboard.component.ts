import { Component, OnInit, Output } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import {ConfimationDialogComponent} from 'src/app/shared/confimation-dialog/confimation-dialog.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nodedata: any[];
  constructor(private testService : TestService, public dialog: MatDialog) { }
  ngOnInit() {
  }
  postNodeValue(testnodes): void{
    this.testService.postTestValues(testnodes).subscribe((data: any) => {
      this.nodedata= data.results;
      console.log(this.nodedata);
      if(data.success === true) {
        const dialogRef = this.dialog.open( ConfimationDialogComponent , {
          width: '300px',
        });
      }
    });
    
  }
}
