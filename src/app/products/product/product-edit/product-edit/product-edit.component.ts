import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/messages/message.service';
import { Product, ProductResolved } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  pageTitle='Product Edit';
  errorMessage?:string;
  product:Product | null=null;
  
  constructor(private productService:ProductService,
              private messageService:MessageService,
              private route:ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    /* There is a problem:In the product edit page, click Add Product,the page can not be jump.
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(id); */
    /* this.route.paramMap.subscribe(
      params=>{
        const id=Number(params.get('id'));
        this.getProduct(id);
      }
    ); */
    /* const resolvedData:ProductResolved=this.route.snapshot.data['resolvedData'];
    this.errorMessage=resolvedData.error;
    this.onProductRetrieved(resolvedData.product); */
    this.route.data.subscribe(
      data=>{
        const resolvedData:ProductResolved=data['resolvedData'];
        this.errorMessage=resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
      }
    );
  }

  /* resolvedData refetch data with productservice.getProduct(id) method
  getProduct(id:number):void{
    this.productService.getProduct(id).subscribe(
      {
        next:product=>this.onProductRetrieved(product),
        error:err=>this.errorMessage=err
      }
    );
  } */
  onProductRetrieved(product: any): void {
    this.product=product;
    if(!this.product){
      this.pageTitle='No product found';
    }else{
      if(this.product.id===0){
        this.pageTitle='Add Product';
      }else{
        this.pageTitle=`Edit Product:${this.product.productName}`;
      }
    }
  }

  deleteProduct():void{
    if(!this.product||!this.product.id){
      this.onSaveComplete(`${this.product?.productName} was deleted`);
    }else {
      if(confirm(`Really delete the product:${this.product.productName}?`)){
        this.productService.deleteProduct(this.product.id).subscribe(
          {
            next:()=>this.onSaveComplete(`${this.product?.productName} was delete`),
            error:err=>this.errorMessage=err
          }
        );
      }
    }
  }

  saveProduct():void{
    if(this.product){
      if(this.product.id===0){
        this.productService.createProduct(this.product).subscribe(
          {
            next:()=>this.onSaveComplete(`The new ${this.product?.productName} was saved`),
            error: err=>this.errorMessage=err
          }
        );
      }else{
        this.productService.updateProduct(this.product).subscribe(
          {
            next:()=>this.onSaveComplete(`The updated ${this.product?.productName} was saved`),
            error:err=> this.errorMessage=err
          }
        );
      }
    }else{
      this.errorMessage='Please correct the validation errors.';
    }
  }

  onSaveComplete(message: string):void {
    if(message){
      this.messageService.addMessage(message);
    }
    // Navigation back to the product list
    this.router.navigate(['/products']);
  }
}
