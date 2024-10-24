import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { headerMenu } from './header.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  categories: headerMenu[] = [
    {
      id: 1,
      name: 'Brazaletes',
      
    },
    {
      id: 2,
      name: 'Anillos',

    },
    {
      id: 3,
      name: 'Aretes',
    },
    {
      id: 4,
      name: 'Collares',
    }
  ];

  onCategoryClick(category: { name: string; }) {
    console.log('Category clicked:', category.name);
    // Add your logic here to handle the click event
  }
}
