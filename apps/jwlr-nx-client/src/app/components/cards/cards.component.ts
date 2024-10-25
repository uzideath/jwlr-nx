import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Product } from './cards.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  products: Product[] = [
    { name: 'Product 1', price: 99.99, image: 'https://dummyimage.com/300x300/ccc/000' },
    { name: 'Product 2', price: 49.99, image: 'https://dummyimage.com/300x300/ddd/000' },
    { name: 'Product 3', price: 79.99, image: 'https://dummyimage.com/300x300/eee/000' },
    { name: 'Product 4', price: 29.99, image: 'https://dummyimage.com/300x300/fff/000' },
    { name: 'Product 5', price: 69.99, image: 'https://dummyimage.com/300x300/ggg/000' },
    { name: 'Product 6', price: 89.99, image: 'https://dummyimage.com/300x300/hhh/000' },
    { name: 'Product 7', price: 59.99, image: 'https://dummyimage.com/300x300/iii/000' },
    { name: 'Product 8', price: 19.99, image: 'https://dummyimage.com/300x300/jjj/000' }
  ];
}
