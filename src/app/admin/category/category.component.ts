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
    public isRequesting: boolean;
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

    private getCategory() {
        this.isRequesting = true;
        this._commonService.getAllCategory()
            .subscribe(data => {
                this.AllCategories = data;
                this.isRequesting = false;
            }, error => console.log(error));
    }


    constructor(private _commonService: CommonService, private _adminService: AdminService) { }

    ngOnInit() {

        this.createFormControls();
        this.createForm();
        this.getCategory();

    }

    onSubmit() {
        if (this.categoryForm.valid) {

            this.myNewCategory = new NewCategory();
            this.myNewCategory.ProductCategory = this.category.value;
            this.isRequesting = true;

            this._adminService.addNewCategory(this.myNewCategory)
                .subscribe(data => {
                    this.isRequesting = false;
                    this.getCategory();
                    console.log(data);
                }, error =>{
                    this.isRequesting = false;
                    console.log(error);
                });

            this.categoryForm.reset();
        }
    }

}
