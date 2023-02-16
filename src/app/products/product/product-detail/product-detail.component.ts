import { Component } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle='Product Detail';
  product:Product |null=null;
  errorMessage='';

  constructor(private productService:ProductService){}

  getProduct(id:number):void{
    this.productService.getProduct(id).subscribe(
      /* response=>{
        this.product=response;
        console.log('this.product: '+this.product)
      } */
       {
        next:product=>this.onProductRetrieved(product),
        error:err=>this.errorMessage=err
      } 
    );
  }
  onProductRetrieved(product: Product): void {
    this.product=product;
    if(this.product){
      this.pageTitle=`Product Detail:${this.product.productName}`;
    }else{
      this.pageTitle='No product found';
    }
  }
}
