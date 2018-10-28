import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ScientificService } from "src/app/services/scientific.service";
import { IScientific } from "../../models/scientific-model";

@Component({
  selector: "app-horse-power",
  templateUrl: "./horse-power.component.html",
  styleUrls: ["./horse-power.component.css"]
})
export class HorsePowerComponent implements OnInit {
  form: FormGroup;
  horsePower: IScientific;
  kiloMeter: IScientific;
  kiloWatt: number;

  constructor(private scientific$: ScientificService) {}

  ngOnInit() {
    this.form = new FormGroup({
      horsePower: new FormControl("", Validators.required)
    });
  }

  convertHp(hp) {
    this.horsePower = hp;
    this.kiloWatt = this.scientific$.hpToKw(this.horsePower);
    this.form.reset();
  }
}
