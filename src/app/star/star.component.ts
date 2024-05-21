import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5; // 75px is the total width for 5 stars
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là  ${this.rating} sao `);
  }
}
