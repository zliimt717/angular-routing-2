import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle='Product List';
  imageWidth=50;
  imageMargin=2;
  showImage=false;
  errorMessage='';

  _listFilter='';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }

  filteredProducts:Product[]=[];
  products:Product[]=[];
  users!: User[];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next:products=>{
          this.products=products;
          this.filteredProducts=this.performFilter(this.listFilter);
        },
        error:err=>this.errorMessage=err
      });
  }
  performFilter(filterBy: string): Product[] {
    filterBy=filterBy.toLowerCase();
    return this.products.filter(
      (product:Product)=>
      product.productName.toLowerCase().indexOf(filterBy)!=-1
    );
  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }

  
}
