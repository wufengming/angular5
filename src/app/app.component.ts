import { Component } from '@angular/core';

/**
 * 根组件
 * @Component()是一个装饰器，唯一需要的参数是一个元数据对象。
 * 参数说明：
 *
 * selector：组件选择器名称，一般采取横杠方式
 * templateUrl：模板文件路径
 * styleUrls：样式文件路径
 * template：模板字符串
 * styles：样式数组，比如：styles: ['h1{font-size:20px;}']
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
