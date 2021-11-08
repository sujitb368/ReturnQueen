import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {


  search = new FormControl('')
  searchForm = new FormGroup({

  })

  constructor() { }

  ngOnInit(): void {
  }

}
