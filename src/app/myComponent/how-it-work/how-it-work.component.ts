import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss']
})
export class HowItWorkComponent implements OnInit {

  hiw_stpes = [
    {
      img:"assets/asset_img/how-it-works/hdiw01.png",
      p:"sign in with gmail",
      desc:["your orders are organized by return date!", "it’s free—no strings attached."]
    },
    {
      img:"assets/asset_img/how-it-works/hdiw02.png",
      p:"choose your plan",
      desc:["join the returns revolution, as low as $9.99.", "start returning stuff from your couch.", "you’re welcome."]
    },
    {
      img:"assets/asset_img/how-it-works/hdiw03.png",
      p:"we'll send you a free return bag",
      desc:["no more printing.","no more taping.", "no more trips to the post office"]
    },
    {
      img:"assets/asset_img/how-it-works/hdiw04.png",
      p:"we'll send you a free return bag",
      desc:["add your items to your ReturnQueen bag.","any amount of items, any amount of stores!"]
    },
    {
      img:"assets/asset_img/how-it-works/hdiw05.png",
      p:"we'll send you a free return bag",
      desc:[  "send us the return labels.", "schedule a convenient contactless pickup.",  "leave your bag in a convenient spot!"]
    },
    {
      img:"assets/asset_img/how-it-works/hdiw06.png",
      p:"you did it!",
      desc:[ "all done!", "sit back and watch the refunds roll in."]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
