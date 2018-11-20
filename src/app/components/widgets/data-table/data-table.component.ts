import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { jqxDataTableComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild("myGrid") myGrid: jqxDataTableComponent;
  timer$;
  rendered;

  url = "https://api.tfl.gov.uk/line/circle/arrivals";
  circleDataLive: any = [];

  circleLineData: any = {
    dataType: "json",
    dataFields: [
      { name: "stationName", type: "string" },
      { name: "platformName", type: "string" },
      { name: "direction", type: "string" },
      { name: "destinationName", type: "string" },
      { name: "currentLocation", type: "string" },
      { name: "towards", type: "string" },
      { name: "expectedArrival", type: "date" },
      { name: "timeToStation", type: "number" }
    ],
    url: this.url
  };

  columns: any = [
    { text: "Station", dataField: "stationName", cellsFormat: "D" },
    { text: "Platform", dataField: "platformName", cellsFormat: "D" },
    { text: "Direction", dataField: "direction", cellsFormat: "D" },
    { text: "Destination", dataField: "destinationName", cellsFormat: "D" },
    {
      text: "Current Location",
      dataField: "currentLocation",
      cellsFormat: "D"
    },
    { text: "Towards", dataField: "towards", cellsFormat: "D" },
    { text: "Expected Time", dataField: "expectedArrival", cellsFormat: "t" },
    { text: "Time to Station", dataField: "timeToStation", cellsFormat: "n" }
  ];
  dataAdapter: any = new jqx.dataAdapter(this.circleLineData);
  constructor(private http$: HttpGetService) {}

  ngOnInit() {
    // setInterval(() => {
    // this.dataAdapter = new jqx.dataAdapter(this.circleLineData);
    // }, 60000);

    

    setInterval(() => {
     this.myGrid.updateBoundData();
    }, 60000);

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.http$.getCircleLine()))
      .subscribe(res => {
        this.circleDataLive = res;
        // console.log(this.circleDataLive);
      });
  } //end of ngOnInIt

  ngAfterViewInit(): void {
    
  }

  getWidth(): any {
    if (document.body.offsetWidth < 1000) {
      return "90%";
    }
    return 1000;
  }
}
