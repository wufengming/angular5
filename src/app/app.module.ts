import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProductComponent } from './component/product/product.component';
import { StarsComponent } from './component/stars/stars.component';
import { PageMainComponent } from './page/page-main/page-main.component';
import { PageDetailComponent } from './page/page-detail/page-detail.component';
import {AppRoutingModule} from "./modules/app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    PageMainComponent,
    PageDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,        //只要导入 BrowserModule 就自动获得了 CommonModule 中的指令。(*ngFor *ngIf)
    FormsModule,          // <-- import the FormsModule before binding with [(ngModel)] (ngModel 指令，它用于双向绑定)
    HttpModule,
    ReactiveFormsModule,   //响应式表单
    AppRoutingModule
  ],
  providers: [             //服务

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
 * exports -    declarations 的子集，可用于其它模块的组件模板。
 * imports -   引入的素材模块或者组件模块等，进行angular模块化引用。
 * providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
 * bootstrap - 指定应用的主视图根组件。
 */
