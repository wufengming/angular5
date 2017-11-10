import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../model/ProductModel";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  private products:Array<ProductModel>;

  constructor() { }

  ngOnInit() {

    this.products=[
      {id:1,name:"第一个商品",price:1.99,rating:3.5,desc:"第一个商品，我在学习angular5的demo",categories:["电子产品","硬件设备"],imgurl:"http://via.placeholder.com//320x150"},
      {id:2,name:"第二个商品",price:2.99,rating:4.5,desc:"第二个商品，我在学习angular5的demo",categories:["图书","硬件设备"],imgurl:"http://via.placeholder.com//320x150"},
      {id:3,name:"第三个商品",price:3.99,rating:5.5,desc:"第三个商品，我在学习angular5的demo",categories:["电子产品",],imgurl:"http://via.placeholder.com//320x150"},
      {id:4,name:"第四个商品",price:4.99,rating:4.5,desc:"第四个商品，我在学习angular5的demo",categories:["硬件设备"],imgurl:"http://via.placeholder.com//320x150"},
      {id:5,name:"第五个商品",price:5.99,rating:3.5,desc:"第五个商品，我在学习angular5的demo",categories:["图书"],imgurl:"http://via.placeholder.com//320x150"}
    ];

    this.products.push({id:6,name:"第六个商品",price:6.99,rating:2.5,desc:"第六个商品，我在学习angular5的demo",categories:["电子产品","硬件设备","图书"],imgurl:"http://via.placeholder.com//320x150"})

  }

  getNewStars(event: any){
    alert(event);
  }

}
