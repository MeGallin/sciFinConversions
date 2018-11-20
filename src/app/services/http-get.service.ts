import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, interval } from "rxjs";
import { map, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getTFLLineService() {
    const rssJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
    const tflLineStatus = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status';
    const URL = rssJsonServiceBaseUrl + tflLineStatus;
    return this.httpGet$.get(tflLineStatus).pipe(retry(5));
  }

  getCircleLine() {
    const tempCircleLineUrl = '../assets/temp-data/circle-line.json';
    const circleLineUrl = 'https://api.tfl.gov.uk/line/circle/arrivals';
    return this.httpGet$.get(circleLineUrl).pipe(retry(5));
  }

  getBulletin() {
    const bulletinUrl = "../assets/bulletin/bulletin.txt";
    return this.httpGet$.get(bulletinUrl, { responseType: "text" });
  }
}
