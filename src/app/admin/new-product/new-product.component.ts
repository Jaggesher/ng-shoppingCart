import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-new-product',
	templateUrl: './new-product.component.html',
	styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	addProduct(newProduct: NgForm): void {
		console.log(newProduct.value);
	}
}
