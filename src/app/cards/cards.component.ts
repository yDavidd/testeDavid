import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../model/service/products.service';
import { CommonModule } from '@angular/common';
import { Iproducts } from '../../model/service/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  products: Iproducts[] = [];
  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}

