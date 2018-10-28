import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FinancialService {
  constructor() {}
  futureHomeValue(e, f, g) {
    const pv = e;
    const rate = f / 100 / 12;
    const term = g * 12;
    const h = Math.pow(1 + rate, term);
    return pv * h;
  }

  futureValue(a, b, c) {
    const term = b * 12;
    const rate = c / 100 / 12;
    const d = Math.pow(1 + rate, term);
    return a * d;
  }

  payment(r, y, z) {
    const term = y * 12;
    const rate = z / 100 / 12;
    const x = Math.pow(1 + rate, -term);
    return (rate * r) / (1 - x);
  }

  amount(p, n, i) {
    const principalAmount = p;
    const period = n * 12;
    const interestRate = i / 100 / 12;
    const x = Math.pow(1 + interestRate, -period);
    // console.log(principalAmount, period, interestRate, x);
    return (principalAmount / interestRate) * (1 - x);
  }
}
