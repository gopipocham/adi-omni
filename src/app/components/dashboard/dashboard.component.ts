import { Component, OnInit, Output } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private testService : TestService) { }
  ngOnInit() {
  }
  postNodeValue(testnodes): void{
    this.testService.postTestValues(testnodes).subscribe((data: any) => {
      console.log(data);
    });
    
  }
}
