import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../shared/services/common.service';
import { AdminService } from '../Services/admin.service';
import { error } from 'protractor';
import { NewCategory } from '../Models/new-category';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    public AllCategories: object = [];
    public categoryForm: FormGroup;
    public category: FormControl;
    public myNewCategory: NewCategory;
    private createForm() {
        this.categoryForm = new FormGroup({
            category: this.category
        });
    }

    private createFormControls() {
        this.category = new FormControl('', [
            Validators.required,
            Validators.maxLength(45)
        ])
    }



    constructor(private _commonService: CommonService, private _adminService: AdminService) { }

    ngOnInit() {

        this.createFormControls();
        this.createForm();

        this._commonService.getAllCategory()
            .subscribe(data => this.AllCategories = data, error => console.log(error));
    }

    onSubmit() {
        if (this.categoryForm.valid) {

            this.myNewCategory = new NewCategory();
            this.myNewCategory.ProductCategory = this.category.value;

            this._adminService.addNewCategory(this.myNewCategory)
            .subscribe(data => console.log(data), error => console.log(error));

            this.categoryForm.reset();
          }
    }
    
}
