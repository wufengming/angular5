import {Component, ViewEncapsulation, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class StarsComponent implements OnInit {

  @Input()
  private rating:number=0;

  private stars:boolean[];

  @Output()
  private getStars:EventEmitter<string>=new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }

  }

  onStarChange(index){
    // index 的数值是从 0 到 4
    //console.log(index+1);
    this.stars = [];
    this.rating=index+1;
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > index+1);
    }

    //向父组件传递选中的数值
    this.getStars.emit(index+1);
  }

}
