import { Component, OnInit } from "@angular/core";
import { FinancialService } from "src/app/services/financial.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { IFinancial } from "../../model/financial-model";

@Component({
  selector: "app-future-value-home",
  templateUrl: "./future-value-home.component.html",
  styleUrls: ["./future-value-home.component.css"]
})
export class FutureValueHomeComponent implements OnInit {
  form: FormGroup;
  futureHomeValue: number;
  hv: IFinancial;
  annualAppriciation: IFinancial;
  term: IFinancial;

  constructor(private finService$: FinancialService) {}
  

  ngOnInit() {
    this.form = new FormGroup({
      hval: new FormControl("", Validators.required),
      period: new FormControl("", Validators.required),
      appriciation: new FormControl("", Validators.required)
    });
  }

  convertHv(homeValue, period, appreciation) {
    this.hv = homeValue;
    this.term = period;
    this.annualAppriciation = appreciation;
    this.futureHomeValue = this.finService$.futureHomeValue(
      this.hv,
      this.term,
      this.annualAppriciation
    );
  }
}
