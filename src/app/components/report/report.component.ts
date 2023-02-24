import { Component, OnInit } from '@angular/core';
import { RealtimedbService } from 'src/app/services/realtimedb.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  logs: any;

  constructor(
    private realtimedbService: RealtimedbService,
  ) { }

  ngOnInit(): void {
    this.getDataLogsDB();
  }

  getDataLogsDB(): void {
    this.realtimedbService.getAllLogs().snapshotChanges()
      .subscribe((data: any) => {
        this.logs = []
        data.forEach((element: any) => {
          this.logs = [...this.logs, element.payload._delegate._node.value_];
        });
      })
  }
}
