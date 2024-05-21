import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/person.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Áo phông thể thao nam',
      productCode: 'MST-001',
      releaseDate: 'Tháng 3, 2022',
      description: 'Áo phông thể thao nam có kiểu dáng thoải mái và thấm hút mồ hôi tốt.',
      price: 29.99,
      starRating: 2.5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-btnjICibv7oopRPYo41lCSAQCyyYlWk5TRPSOc_f675peCbrRoTYdnihTaKOlo0o9Dg&usqp=CAU',
      showImage: true
    },
    {
      productId: 2,
      productName: 'Quần đùi thể thao nữ',
      productCode: 'MST-002',
      releaseDate: 'Tháng 5, 2022',
      description: 'Quần đùi thể thao nữ với chất liệu co giãn và thoáng mát.',
      price: 19.99,
      starRating: 4.2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieRLay8BflQh3ETdgJMuCXgzc0LD9UDU-aIJHbRbnvfplZAWQAmNwVDRWPRr9zKvWXno&usqp=CAU',
      showImage: true
    },
    {
      productId: 3,
      productName: 'Bộ quần áo thể thao nam',
      productCode: 'MST-003',
      releaseDate: 'Tháng 6, 2022',
      description: 'Bộ quần áo thể thao nam gồm áo phông và quần đùi, phù hợp cho việc tập luyện và vận động.',
      price: 49.99,
      starRating: 4.8,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsC6eAzLOZOLZappcYXDdHkONeIe1zGCa4xH1yAMgTdxCLoLRUGhevzMxuTYfvdKzEtk&usqp=CAU',
      showImage: true
    },
    {
      productId: 4,
      productName: 'Áo thun thể thao nữ',
      productCode: 'MST-004',
      releaseDate: 'Tháng 7, 2022',
      description: 'Áo thun thể thao nữ với chất liệu co giãn và thoáng mát, giúp bạn thoải mái khi tập luyện.',
      price: 24.99,
      starRating: 4.3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_arQDuC7nJloA2YTFRuOfPU_9cUdkyAQflo_czn9QOolEjKlGadUBwRmbhz1L-itTezk&usqp=CAU',
      showImage: true
    },
    {
      productId: 5,
      productName: 'Quần legging thể thao nữ',
      productCode: 'MST-005',
      releaseDate: 'Tháng 8, 2022',
      description: 'Quần legging thể thao nữ với chất liệu co giãn và ôm sát, giúp bạn tự tin khi tập luyện.',
      price: 34.99,
      starRating: 4.6,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Y0B4DBSHIrZUM45NlPkYhEd5u3xxMqDIWsa-P6h5tEC3NfJiLca53PKsPHBwxi0Qu5w&usqp=CAU',
      showImage: true
    },
    {
      productId: 6,
      productName: 'Áo khoác thể thao nam',
      productCode: 'MST-006',
      releaseDate: 'Tháng 9, 2022',
      description: 'Áo khoác thể thao nam với chất liệu chống nước và chống gió, phù hợp cho các hoạt động ngoài trời.',
      price: 59.99,
      starRating: 4.7,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRUtUknAmkuzc5DxdjYqpSXKl8gxih2a7X4narWwv9W--AiV13CxwDPuCu8rXO-uzmy0&usqp=CAU',
      showImage: true
    }
  ];
  listProduct: IProduct[] = [];

  constructor() { }

  ngOnInit() {
    this.listProduct = this.products;
  }

  filterValue: string = '';

  get filter(): string {
    return this.filterValue;
  }

  set filter(value: string) {
    this.filterValue = value;
    this.performFilter();
  }

  performFilter() {
    const filterKeywords = this.filterValue.toLowerCase().split(' ');

    this.products = this.listProduct.filter(product => {
      return filterKeywords.every(keyword => {
        return product.productName.toLowerCase().includes(keyword);
      });
    });
  }

  toggleImage(product: IProduct): void {
    product.showImage = !product.showImage;
  }

  ratingMessage: string = '';
  onRatingClicked(event: number) {
    this.ratingMessage = ` ${event} `;
  }
}
