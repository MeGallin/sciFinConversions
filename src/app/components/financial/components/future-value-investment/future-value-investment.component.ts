import { Component, OnInit } from "@angular/core";
import { FinancialService } from "src/app/services/financial.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IFinancial } from "../../model/financial-model";

@Component({
  selector: "app-future-value-investment",
  templateUrl: "./future-value-investment.component.html",
  styleUrls: ["./future-value-investment.component.css"]
})
export class FutureValueInvestmentComponent implements OnInit {
  formFutureValue: FormGroup;

  pv: IFinancial;
  n: IFinancial;
  i: IFinancial;
  nTerm: IFinancial;
  fv: number;
  constructor(private finService$: FinancialService) {}

  ngOnInit() {
    this.formFutureValue = new FormGroup({
      pv: new FormControl("", Validators.required),
      term: new FormControl("", Validators.required),
      interestRate: new FormControl("", Validators.required)
    });
  }

  converFutureValue(prinsValue, period, rate) {
    this.pv = prinsValue;
    this.nTerm = period;
    this.i = rate;
    console.log(this.pv, this.nTerm, this.i);
    this.fv = this.finService$.futureValue(this.pv, this.nTerm, this.i);
  }
}
