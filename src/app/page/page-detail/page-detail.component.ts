import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: 'page-detail.component.html',
  styleUrls: ['page-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageDetailComponent implements OnInit {

  private id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = params.id);
  }

}
