import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'RQ';
  zip = new FormControl('')
  searchForm = new FormGroup({

  })
  // favoriteColorControl = new FormControl('');
  loginUser(){
    console.log("submited");

  }
}
