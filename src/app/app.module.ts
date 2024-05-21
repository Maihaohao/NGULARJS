import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './admin/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    StarComponent,
    ProductListComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule
   // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
