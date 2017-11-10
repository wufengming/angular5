import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PageDetailComponent} from "../page/page-detail/page-detail.component";
import {ProfileComponent} from "../component/profile/profile.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: PageDetailComponent,
    children: [
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class AppDetailModule {

}
