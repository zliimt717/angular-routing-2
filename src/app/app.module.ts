import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomComponent } from './home/welcom/welcom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { ProductData } from './products/product-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductModule } from './products/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData,{delay:1000}),
    ProductModule,
    UserModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
