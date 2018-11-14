import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { jqxCalendarComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild("myCalendar") myCalendar: jqxCalendarComponent;
 
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
        let date1 = new Date('2018/12');
        let date2 = new Date('2019/01');
        let date3 = new Date();
        date1.setDate(15);
        date2.setDate(7);
        date3.setDate(18);
        // Add special dates by invoking the addSpecialDate method.
        this.myCalendar.addSpecialDate(date1, '', 'Moms Birthday');
        this.myCalendar.addSpecialDate(date2, '', 'Deputi Start');
        this.myCalendar.addSpecialDate(date3, '', 'Guys Birthday');
  }
}
