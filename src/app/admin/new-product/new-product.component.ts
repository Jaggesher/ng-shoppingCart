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

	public allCategory: Object[];
	public productForm: FormGroup;
	public customFile: FormControl;
	public description: FormControl;
	public category: FormControl;
	public price: FormControl;
	public stock: FormControl;

	private createForm() {
		this.productForm = new FormGroup({
			customFile: this.customFile,
			description: this.description,
			category: this.category,
			price: this.price,
			stock: this.stock
		});
	}

	private createFormControls() {
		this.customFile = new FormControl();
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
		this._commonService.getAllCategory()
			.subscribe(data => this.allCategory = data, error => console.log(error));
	}

	constructor(private _commonService: CommonService, private _adminService: AdminService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		this.getCategory();
	}

	onSubmit() {
		console.log(this.customFile);
	}
}
