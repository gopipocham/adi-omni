import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import {ConfimationDialogComponent} from 'src/app/shared/confimation-dialog/confimation-dialog.component'
import {MatDialog, MatDialogRef} from '@angular/material';
import { MatTabGroup } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  nodedata: any[];
  dialogueRef: MatDialogRef<ConfimationDialogComponent>;
  constructor(private testService : TestService, public dialog: MatDialog, private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
  }
  postNodeValue(testnodes): void{
    this.spinner.show();
    this.testService.postTestValues(testnodes).subscribe((data: any) => {
      this.nodedata= data.results;
      console.log(this.nodedata);
      if(data.success === true) {
          this.spinner.hide();
        this.dialogueRef = this.dialog.open( ConfimationDialogComponent , {
          width: '700px',
        });
          this.dialogueRef.afterClosed().subscribe(index => {
          this.tabGroup.selectedIndex = index;
        });
      }
    });
  }
}
