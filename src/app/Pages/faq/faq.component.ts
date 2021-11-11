import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { FaqApiService } from './../../faq-api.service';
import { FaqApiService } from 'src/app/faq-api.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  posts:any;

  search = new FormControl('')
  searchForm = new FormGroup({

  })
  // https://returnqueen.com/admin/api/faq_data/list_faq
  ques =  [
    {
      "question": "How much does ReturnQueen cost to use?",
      "answer": "<p>As a free member, you can organize and track your online purchases. To receive ReturnQueen Return Service, there are 3 membership options for you to choose from, Basic, Savvy and Royal. </p>\r\n\r\n<p> </p>\r\n\r\n<p><a href=\"https://www.returnqueen.com/#pricing\">See membership options</a></p>\r\n",
      "sequence": "1",
      "category_id": "11"
    },
    {
      "question": "What are my payment options?",
      "answer": "<p>ReturnQueen accepts all credit card payments (Discover, Visa, Mastercard, Amex).</p>\r\n",
      "sequence": "2",
      "category_id": "11"
    },
    {
      "question": "Does ReturnQueen take any percentage of my refund? ",
      "answer": "<p>No. Your refund will come directly from the company you purchased your item from.</p>\r\n<style type=\"text/css\">.tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}\r\n</style>\r\n",
      "sequence": "3",
      "category_id": "11"
    },
    {
      "question": "How and when will I get my refund?",
      "answer": "<p>Your refund will come directly from the vendor you purchased your item from, and distributed based on their individual return policies. </p>\r\n",
      "sequence": "4",
      "category_id": "11"
    },
    {
      "question": "Can I use the ReturnQueen app without a paid membership? ",
      "answer": "<p>Sure! The ReturnQueen app has amazing organization, budgeting and money saving features that you will love. Anyone can use the app to track their purchases for free. To return items with a tap and a drop, upgrade your membership here. </p>\r\n\r\n<p> </p>\r\n\r\n<p><a href=\"https://www.returnqueen.com/index#pricing\">Upgrade your Membership</a></p>\r\n",
      "sequence": "5",
      "category_id": "11"
    },
    {
      "question": "Will I be asked before being charged an extra fee?",
      "answer": "<p>Yes, you will always be prompted before any charge, there are no surprise fees with ReturnQueen.</p>\r\n",
      "sequence": "6",
      "category_id": "11"
    },
    {
      "question": "Am I billed automatically? When does each billing cycle end?",
      "answer": "<p>Yes, you are billed automatically. Each billing cycle ends on the day of the month you signed up.</p>\r\n",
      "sequence": "7",
      "category_id": "11"
    },
    {
      "question": "How do I cancel my ReturnQueen subscription?",
      "answer": "<p>To cancel service, tap Account. Click on Membership and select Free. This changes your level of service to a Free member.</p>\r\n",
      "sequence": "8",
      "category_id": "11"
    },
    {
      "question": "If I cancel my membership, does it still remain active until the end of my billing cycle? ",
      "answer": "<p>To cancel, you need to downgrade your account to a free membership, which deactivates your service. If you would like to wait until the end of your billing cycle and be reminded to cancel the day before, you can email <a href=\"mailto:support@returnquee.com\">support@returnqueen.com</a></p>\r\n",
      "sequence": "9",
      "category_id": "11"
    },
    {
      "question": "Are there any additional costs not included in the membership fee? ",
      "answer": "<p>Membership covers complete return service, including picking up, wrapping, boxing, processing and shipping out your return. The only extra fees you may be asked for, is if your item is oversized (please refer to “Oversized Items” in the FAQ), or, if free return shipping is not included in the vendor’s return policy. Keep in mind that though this is an additional cost, it will still cost less than shipping it yourself.</p>\r\n",
      "sequence": "10",
      "category_id": "11"
    }
  ]


  constructor(private faqApiService:FaqApiService) {
    // search functionality of faq
    const search_input = () => {
      var temp = [];
      let serach_for_faq =(<HTMLInputElement>document.getElementById("input")).value.toLowerCase();

      for (var i = 0; i < this.ques.length; i++) {

          let question_text = this.ques[i].question.toLowerCase()

          if (question_text.includes(serach_for_faq)) {

            temp.push(serach_for_faq);

          }
      }




  }
   }

  ngOnInit(): void {
    this.faqApiService.getPosts().subscribe(
      // this.posts = response;
      (response) => { console.log("api response",response);
      ; },
      (error) => { console.log(error); });
  }

}
