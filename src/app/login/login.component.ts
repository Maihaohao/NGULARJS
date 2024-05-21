import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "abc";

  constructor() { }

  ngOnInit(): void {
  }

  handleUsername(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }


  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
