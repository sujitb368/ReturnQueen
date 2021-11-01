import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-from-companies',
  templateUrl: './buy-from-companies.component.html',
  styleUrls: ['./buy-from-companies.component.scss']
})
export class BuyFromCompaniesComponent implements OnInit {

  path="/assets/asset_img/partners/" + "amazon.png";
  constructor() { }

  ngOnInit(): void {
  }

}
