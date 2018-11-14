import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getBilliton() {
    const billitonUrl = "../assets/billiton/billiton.txt";
    return this.httpGet$.get(billitonUrl, { responseType: "text" });
  }
}