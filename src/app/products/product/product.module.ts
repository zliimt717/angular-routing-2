import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { RouterModule } from '@angular/router';
import { ProductResolver } from '../product-resolver.service';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  imports: [
   SharedModule,
   RouterModule.forChild([
    {path:'products',component:ProductListComponent},
    {path:'products/:id',component:ProductDetailComponent,resolve:{resolvedData:ProductResolver}},
    {path:'products/:id/edit',component:ProductEditComponent,resolve:{resolvedData:ProductResolver}}
   ])
  ]
})
export class ProductModule { }
