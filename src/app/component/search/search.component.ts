import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl,Validators} from "@angular/forms";
import {CodeNameModel} from "../../model/CodeNameModel";


/**
 * FormControl、FormGroup、FormBuilder
 *
 * FormControl:单个表单控件
 * FormGroup:包含是一组 FormControl
 * FormBuilder:
 */
@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  private categorys:Array<CodeNameModel>;
  private searchGroup: FormGroup;
  constructor(
    private formbuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.categorys=[
      {code:"电子产品",name:"电子产品"},
      {code:"硬件设备",name:"硬件设备"},
      {code:"图书",name:"图书"}
    ];


    // this.searchGroup = new FormGroup({
    //   productTitle: new FormControl('',[Validators.required, Validators.minLength(2)]),
    //   productPrice: new FormControl(''),
    //   productCategory: new FormControl('')
    // });

    this.searchGroup=this.formbuilder.group({
      productTitle:['',[Validators.required, Validators.minLength(2)]],
      productPrice:[''],
      productCategory:['']
    });

  }


  onSubmit(){
    //console.log(event);
    console.log(this.searchGroup.value, this.searchGroup.valid);
  }

}
