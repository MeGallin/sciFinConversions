import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public innerWidth: number;

  @HostListener("window:resize", ["$event"])
  onresize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
