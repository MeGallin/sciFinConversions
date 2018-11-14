import { Component, OnInit } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";
import { HttpGetService } from "src/app/services/http-get.service";
import { interval } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  showTime;
  showBilliton;
  height: number = 260;

  constructor(
    private dateTime$: DateTimeService,
    private billitonService$: HttpGetService
  ) {}

  ngOnInit() {
 this.billitonService$.getBilliton().subscribe(res => {
   this.showBilliton = res;
 })
    this.showTime = this.dateTime$.dateTime();
  }
}
