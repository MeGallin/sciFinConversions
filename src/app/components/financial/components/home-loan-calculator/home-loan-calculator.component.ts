import { Component, OnInit } from "@angular/core";
import { FinancialService } from "src/app/services/financial.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IFinancial } from "../../model/financial-model";

@Component({
  selector: "app-home-loan-calculator",
  templateUrl: "./home-loan-calculator.component.html",
  styleUrls: ["./home-loan-calculator.component.css"]
})
export class HomeLoanCalculatorComponent implements OnInit {
  form: FormGroup;
  pmt: number;
  pv: IFinancial;
  n: IFinancial;
  i: IFinancial;

  constructor(private finService$: FinancialService) {}

  ngOnInit() {
    this.form = new FormGroup({
      pv: new FormControl("", Validators.required),
      term: new FormControl("", Validators.required),
      interestRate: new FormControl("", Validators.required)
    });
  }

  convertLoan(prinsValue, period, rate) {
    this.pv = prinsValue;
    this.n = period;
    this.i = rate;
    this.pmt = this.finService$.payment(this.pv, this.n, this.i);
  }
}
