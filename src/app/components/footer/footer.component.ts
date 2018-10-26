import { Component, OnInit } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showTime;

  constructor(private dateTime$ : DateTimeService) { }

  ngOnInit() {
  this.showTime =  this.dateTime$.dateTime();
  }

}
