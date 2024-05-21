import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readMore(){
    alert("đình đẹp trai nha");
    console.log("Đình k đẹp lắm");
    
  }
}
