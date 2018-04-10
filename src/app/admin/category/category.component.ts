import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../../shared/services/common.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public AllCategories = [];
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.AllCategories = this._commonService.getAllCategory();
  }
  
  addCategory(newCategory: NgForm): void {
    console.log(newCategory.value);
  }
}
