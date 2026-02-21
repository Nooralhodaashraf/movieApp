import { Component, inject } from '@angular/core';
import { ProductListService } from '../product-list-service';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly ProductListService = inject(ProductListService);

  productList: ProductList[] = [];
  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData(): void {
    this.ProductListService.getProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
        console.log(this.productList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // repeat(count: number): number[] {
  //   return Array.from({ length: count });
  // }
  repeat(count: number, limit: number = 10): number[] {
    const safeCount = Math.min(count, limit);
    return Array.from({ length: safeCount });
  }
}
