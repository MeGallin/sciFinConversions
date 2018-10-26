import { Component, OnInit } from "@angular/core";
import { ScientificService } from "src/app/services/scientific.service";
import { IScientific } from "./models/scientific-model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-scientific",
  templateUrl: "./scientific.component.html",
  styleUrls: ["./scientific.component.css"]
})
export class ScientificComponent implements OnInit {
  formHp: FormGroup;
  formMiles: FormGroup;
  formMetre: FormGroup;

  horsePower: IScientific;
  kiloMeter: IScientific;
  metre: IScientific;
  kiloWatt: number; 
  mile: number;  
  foot: number;

  constructor(
    private scientific$: ScientificService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.form = this.fb.group({
    //   horsePower: ['', Validators.required]
    // })

    this.formHp = new FormGroup({
      horsePower: new FormControl("", Validators.required)
    });
    this.formMiles = new FormGroup({
      kilometer: new FormControl("", Validators.required)
    });
    this.formMetre = new FormGroup({
      metre: new FormControl("", Validators.required)
    });
  }

  convertHp(hp) {
    this.horsePower = hp;
    this.kiloWatt = this.scientific$.hpToKw(this.horsePower);
    this.formHp.reset();
  }

  convertKm(kM) {
    this.kiloMeter = kM;  
    this.mile = this.scientific$.milesToKilometers(this.kiloMeter);
    this.formMiles.reset();
  }

  convertMetre(m) {
    this.metre = m;   
    this.foot = this.scientific$.metreToFoot(this.metre);
    this.formMetre.reset();
  }
}
