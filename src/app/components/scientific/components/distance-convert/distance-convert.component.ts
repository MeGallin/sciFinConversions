import { Component, OnInit } from '@angular/core';
import { ScientificService } from 'src/app/services/scientific.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IScientific } from '../../models/scientific-model';

@Component({
  selector: 'app-distance-convert',
  templateUrl: './distance-convert.component.html',
  styleUrls: ['./distance-convert.component.css']
})
export class DistanceConvertComponent implements OnInit {
  formMiles: FormGroup;
  formMetre: FormGroup;

  horsePower: IScientific;
  kiloMeter: IScientific;
  metre: IScientific;
  
  mile: number;  
  foot: number;

  constructor(private scientific$: ScientificService) { }

  ngOnInit() {
    this.formMiles = new FormGroup({
      kilometer: new FormControl("", Validators.required)
    });
    this.formMetre = new FormGroup({
      metre: new FormControl("", Validators.required)
    });
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
