import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageMainComponent} from "../page/page-main/page-main.component";
import {PageDetailComponent} from "../page/page-detail/page-detail.component";
import {AppDetailModule} from "./app-detail.module";

/**
 *
 * RouterModule静态的方法：forRoot() 和 forChild()
 * 根模块中使用 forRoot()，子模块中使用 forChild()
 *
 * :id 是路由参数
 * loadChildren:需要导入模块的相对路径 + # 分隔符 + 导出模块类的名称
 */
export const routes: Routes = [

  {
    path: 'detail/:id',
    //loadChildren:'./modules/app-detail.module#AppDetailModule'
    component: PageDetailComponent
  },
  {path: '**', component: PageMainComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
