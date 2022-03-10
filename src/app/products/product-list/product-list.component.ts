import { Component, OnInit } from "@angular/core";

import { ProductService } from "../product.service";
import { Product } from "./../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  public products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => console.log(error)
    );
  }
}
