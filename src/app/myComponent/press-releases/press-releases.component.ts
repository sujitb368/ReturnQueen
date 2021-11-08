import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss']
})
export class PressReleasesComponent implements OnInit {

  img_name = ["miami.jpg", "tampa.jpg", "austin.jpg", "boston.jpg", "charlotte.jpg",  "dunkin.jpg", "nashville.jpg", "newjersey.jpg", "newyork.jpg", "raleigh.jpg", "silicon.jpg", ]
  press_img_src = "assets/asset_img/press/";

  constructor() { }

  ngOnInit(): void {
  }


}
