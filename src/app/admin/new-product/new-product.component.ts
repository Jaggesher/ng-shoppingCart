import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { CommonService } from '../../shared/services/common.service';
import { AdminService } from '../Services/admin.service';

@Component({
	selector: 'app-new-product',
	templateUrl: './new-product.component.html',
	styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

	public isRequesting: boolean;
	public allCategory: Object[];
	public productForm: FormGroup;
	public customFile: File = null;
	public description: FormControl;
	public category: FormControl;
	public price: FormControl;
	public stock: FormControl;
	public isFileValid: boolean = false;

	private createForm() {
		this.productForm = new FormGroup({
			description: this.description,
			category: this.category,
			price: this.price,
			stock: this.stock
		});
	}

	private createFormControls() {

		this.category = new FormControl('', [
			Validators.required,
		]);
		this.description = new FormControl('', [
			Validators.required,
			Validators.maxLength(995)
		]);
		this.price = new FormControl('', [
			Validators.required,
			Validators.min(1),
			Validators.max(100000000)
		]);
		this.stock = new FormControl('', [
			Validators.required,
			Validators.min(1),
			Validators.max(100000)
		]);
	}

	private getCategory() {
		this.isRequesting = true;
		this._commonService.getAllCategory()
			.subscribe(data => {
				this.allCategory = data;
				this.isRequesting = false;
			}, error => console.log(error));
	}

	onFileSelected(event) {
		this.customFile = event.target.files[0];
		this.isFileValid = true;
	}

	constructor(private _commonService: CommonService, private _adminService: AdminService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		this.getCategory();
	}

	onSubmit() {
		this.isRequesting = true;
		this._adminService.addNewProduct(this.customFile, this.category.value, this.description.value, this.stock.value, this.price.value)
			.subscribe(data => {
				this.isRequesting = false;
				console.log(data);
			}, error =>{
				this.isRequesting = false;
				console.log(error);
			});

		this.productForm.reset();

	}
}
