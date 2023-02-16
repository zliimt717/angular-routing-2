import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styles: [
  ]
})
export class ProductEditInfoComponent implements OnInit{
  @ViewChild(NgForm)productForm?:NgForm;

  errorMessage='';
  product={id:1,productName:'test',productCode:'test',description:'test'};

  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
  }

}
