import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  planInfo = [
    {title:"free", img:"./assets/asset_img/plans/free.png", price:"$0.00", priceBelow:"", offer:"no return service",heading:"organized shopping begins here.", details:["Organize and track your orders by return date", "Next day scheduling", "Pickups available Monday - Friday", "Weekend Pickups available", "Extended pick-up hours", "Ultra-flex scheduiling"]},

    {title:"basic", img:"./assets/asset_img/plans/starter.png", price:"$9.99",priceBelow:"after 1 free pickup", offer:"1 pickup per month",heading:"this way to convenience", details:["Organize and track your orders by return date", "Next day scheduling", "Pickups available Monday - Friday", "Weekend Pickups available","Extended pick-up hours","Ultra-flex scheduiling"]},

    {title:"savvy", img:"./assets/asset_img/plans/premium.png", price:"$17.99",priceBelow:"after 1 free pickup", offer:"2 pickup per month",heading:"top service for the most value", details:["Organize and track your orders by return date", "Next day scheduling", "Pickups available Monday - Friday", "Weekend Pickups available","Extended pick-up hours","Ultra-flex scheduiling"]},

    {title:"royal", img:"./assets/asset_img/plans/royal.png", price:"$34.99",priceBelow:"after 1 free pickup", offer:"4 pickup per month",heading:"the royal treatment. this is as good as it gets.", details:[ { name:"Organize and track your orders by return date", check:true} ,"Next day scheduling", "Pickups available Monday - Friday", "Weekend Pickups available","Extended pick-up hours","Ultra-flex scheduiling"]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
