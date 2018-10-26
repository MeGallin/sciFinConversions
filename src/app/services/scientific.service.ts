import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ScientificService {
  constructor() {}
  hpToKw(hp) {
    const horsePower = hp;
    return (horsePower * 0.7457);
  }
  milesToKilometers(m) {
    const miles = m;
    return (miles * 0.6213699495);
  }
  metreToFoot(met) {
    const metre = met;
    return (metre * 3.280839895);
  }
}
