import {Component, OnInit, ViewEncapsulation} from '@angular/core';


/**
 * 　　
 *
      Web Components 标准 (Shadow DOM封装)
      encapsulation: ViewEncapsulation.None
      encapsulation: ViewEncapsulation.Emulated
      encapsulation: ViewEncapsulation.Native

       None:
 　　  使用None策略，组件配置的样式没做任何封装；它会直接在文档树种插入<style>标签，这个样式全局有效。

   　　Emulated:
   　　使用Emulated策略，组件配置的样式只在该组件的元素上生效(不包括宿主元素)；它是给每个样式名加入一个程序自动生成的属性，同时该组件所有的元素也会被添加该样式，组件之外的元素没有这个属性，从而达到隔离效果。
   　　注意：这个策略的样式只作用在该组件的元素上，外部组件以及子组件没有对应隔离属性，所以样式不会作用到外部组件和子组件上。

   　　Native:
   　　使用Native策略，Angular2会使用"shadow DOM"技术对组件所有元素进行隔离(类似iframe的分离效果)。元素被独立出正常的DOM树，所以其内部的样式达到了隔离效果。
   　　注意：使用这个策略的组件被独立出去了，所以全局样式没法作用到组件内部。如果组件元素需要用到全局样式，千万别使用这种封装策略。
 */
@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css'],
  encapsulation: ViewEncapsulation.None    // None | Emulated | Native
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
