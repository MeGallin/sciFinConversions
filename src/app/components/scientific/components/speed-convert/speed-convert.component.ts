import { Component, OnInit } from "@angular/core";
import { ScientificService } from "src/app/services/scientific.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-speed-convert",
  templateUrl: "./speed-convert.component.html",
  styleUrls: ["./speed-convert.component.css"]
})
export class SpeedConvertComponent implements OnInit {
  form: FormGroup;
  speed;
  distance;
  time;
  showKPH = false;
  speedKPH;
  checkBoxMessage: string = 'Convert to km/h'

  constructor(private scientific$: ScientificService) {}

  ngOnInit() {
    this.form = new FormGroup({
      distance: new FormControl("", Validators.required),
      time: new FormControl("", Validators.required),
      kph: new FormControl("")
    });
  }

  convertSpeed(dist, t) {
    this.distance = dist;
    this.time = t;
    this.speed = this.scientific$.speed(this.distance, this.time);
    this.form.reset();

    this.form.get("kph").valueChanges.subscribe(kph => {
      if (kph !== true) {
        this.showKPH = false;
      } else {      
        this.speedKPH = this.scientific$.metersPerSecondToKPH(this.speed);
        this.showKPH = true;       
      }
    });
  }

  convertToKilometers() {
    this.speedKPH = this.scientific$.metersPerSecondToKPH(this.speed);
  }
}
