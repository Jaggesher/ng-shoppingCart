import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { catchError, retry, count } from 'rxjs/operators'
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable()
export class CommonService extends BaseService {

	constructor(private http: HttpClient) { super(); }

	getAllCategory(): Observable<Category[]> {
		return this.http.get<Category[]>(`${environment.baseUrl}/api/admin/AllCategory`)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);
	}

	getLocalProductsNumber():number{
		var products = this.getAllLocalProduct();
		var Count = 0;
		for(var i in products) Count += products[i];
		return Count;
	}

	clearLocalStorage(){
		localStorage.removeItem('products');
	}

	getAllProduct(): Observable<Product[]> {
		return this.http.get<Product[]>(`${environment.baseUrl}/api/General/AllProducts`)
			.pipe(
				catchError(val => this.handleError(val))
			);
	}

	getProduct(id): Observable<Product> {
		return this.http.get<Product>(`${environment.baseUrl}/api/General/${id}`)
			.pipe(
				catchError(val => this.handleError(val))
			);
	}


	addProductToLocal(id: string, quantity: number) {
		try {
			var products = this.getAllLocalProduct();
			if (products == null) {
				console.log("new");
				products = {};
			}

			products[id] = quantity;

			localStorage.setItem("products", JSON.stringify(products));

			console.log(this.getAllLocalProduct());
			return "success";
		} catch
		{
			return "fail";
		}

	}

	getAllLocalProduct() {
		return JSON.parse(localStorage.getItem("products"));
	}

	getLocalProductQuantity(id: string): number {
		var products = this.getAllLocalProduct();
		return products[id];
	}

	getAllLocalProductDetails(): Observable<Product[]> {

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}

		var Data = { "Ids": [] }
		var products = this.getAllLocalProduct();
		for (var i in products) Data["Ids"].push(i);

		return this.http.post<Product[]>(`${environment.baseUrl}/api/General/GetByIDs`, Data, httpOptions)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);
	}

	saveShipment(_cart: Cart) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}
		 _cart.OrderProduct = [];
		var products = this.getAllLocalProduct();
		for (var i in products){
			_cart["OrderProduct"].push({"ProductID":i,"Quantity": products[i]});
		}

		return this.http.post(`${environment.baseUrl}/api/General/StoreShipment`, _cart, httpOptions)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);
	}



	
}
