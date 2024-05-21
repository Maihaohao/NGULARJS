import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
    // NgOnInit không nên thực hiện bất kỳ hành động nào với childComponent
  }

  ngAfterViewInit() {
    // Kiểm tra childComponent trước khi truy cập thuộc tính của nó
    if (this.childComponent) {
      this.childComponent.username = "abc";
      this.childComponent.updateUserName();
    } else {
      console.error('childComponent is not available');
    }
  }
}
