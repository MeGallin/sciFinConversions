import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { jqxCalendarComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild("myCalendar") myCalendar: jqxCalendarComponent;
  height: number = 220;
  tooltip: any =
    {
        visible: true
        
    }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
        let date1 = new Date();
        let date2 = new Date();
        let date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(18);
        // Add special dates by invoking the addSpecialDate method.
        this.myCalendar.addSpecialDate(date1, '', 'Special Date1');
        this.myCalendar.addSpecialDate(date2, '', 'Deputi Meet');
        this.myCalendar.addSpecialDate(date3, '', 'Guys Birthday');
  }
}
