import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/services/financial.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFinancial } from '../../model/financial-model';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css']
})
export class LoanAmountComponent implements OnInit {
  form: FormGroup;
  pmt: number;
  pv: IFinancial;
  n: IFinancial;
  i: IFinancial;

  constructor(private finService$: FinancialService) { }

  ngOnInit() {
    this.form = new FormGroup({
      pv: new FormControl("", Validators.required),
      term: new FormControl("", Validators.required),
      interestRate: new FormControl("", Validators.required)
    });
  }

  convertLoanAmount(prinsValue, period, rate) {
    this.pv = prinsValue;
    this.n = period;
    this.i = rate;
    this.pmt = this.finService$.amount(this.pv, this.n, this.i);
  }

}
