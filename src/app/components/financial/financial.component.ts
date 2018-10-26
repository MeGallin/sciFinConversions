import { Component, OnInit } from "@angular/core";
import { FinacialService } from "src/app/services/financial.service";
import { IFinancial } from "./model/financial-model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-financial",
  templateUrl: "./financial.component.html",
  styleUrls: ["./financial.component.css"]
})
export class FinancialComponent implements OnInit {
  formHomeValue : FormGroup;
  hv: IFinancial;
  annualAppriciation;
  term: IFinancial;
  public futureHomeValue: number;
  pv: IFinancial;
  n: IFinancial;
  i: IFinancial;
  fv: IFinancial;
  pmt: IFinancial;

  constructor(private finService$: FinacialService) {}

  ngOnInit() {
    this.formHomeValue = new FormGroup({
      hval: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      appriciation: new FormControl('', Validators.required)
    })
  } // End of ngOnInIt

  convertHv(homeValue, period, appreciation){
    this.hv = homeValue;
    this.term = period;
    this.annualAppriciation = appreciation;    

    this.futureHomeValue = this.finService$.futureHomeValue(
      this.hv, 
      this.term, 
      this.annualAppriciation);
  }

}
