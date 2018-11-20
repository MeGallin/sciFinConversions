import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";
import { HttpGetService } from "src/app/services/http-get.service";
import { interval, timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  showTime;
  showBulletin;
  height: number = 260;
  tubeData: any = [];
  timer$;

  displayedColumns: string[] = ["name", "status", "type"];
  dataSource:any = new MatTableDataSource();

  constructor(
    private dateTime$: DateTimeService,
    private BulletinService$: HttpGetService
  ) {}

  ngOnInit() {
    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.BulletinService$.getTFLLineService()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.tubeData = res;
      });

    setInterval(() => {
      this.BulletinService$.getBulletin().subscribe(res => {
        this.showBulletin = res;
      });
    }, 2000);
    this.showTime = this.dateTime$.dateTime();
  }

  applyFilter(filterValue: string) {
    // this.input.nativeElement.value;
    // this.dataSource = new MatTableDataSource();
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }
}
