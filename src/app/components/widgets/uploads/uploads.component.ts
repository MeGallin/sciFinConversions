import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  uploadUrl = 'assets/api/upload.php';
  

  constructor() { }

  ngOnInit() {
  }

}
