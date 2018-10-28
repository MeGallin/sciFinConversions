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
 
  formMiles: FormGroup;
  formMetre: FormGroup;

  horsePower: IScientific;
  kiloMeter: IScientific;
  metre: IScientific;
  
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

    
   
  }

  

  
}
