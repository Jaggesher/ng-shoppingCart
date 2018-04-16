import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';
import { NewCategory } from '../Models/new-category';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Credential } from '../Models/credential';
import { Auth } from '../Models/auth';
import { Shipment } from '../Models/shipment';


@Injectable()
export class AdminService extends BaseService {

	constructor(private http: HttpClient) { super(); }

	addNewCategory(_newCategory: NewCategory) {

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}

		return this.http.post(`${environment.baseUrl}/api/admin/AddCategory`, _newCategory, httpOptions)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);
	}

	addNewProduct(Img, CategoryId, Description, InStock, Price) {

		const httpOptions = {
			headers: new HttpHeaders({
			})
		}

		const fd = new FormData();

		fd.append('Img', Img, Img.name);
		fd.append('CategoryId', CategoryId);
		fd.append('Description', Description);
		fd.append('InStock', InStock);
		fd.append('Price', Price);

		return this.http.post(`${environment.baseUrl}/api/admin/AddProduct`, fd)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);

	}

	storeToken(auth:Auth){
		localStorage.setItem('token',auth.auth_token);
	}

	login(_credential: Credential): Observable<Auth> {

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}

		return this.http.post(`${environment.baseUrl}/api/auth/login`, _credential, httpOptions)
			.pipe(
				catchError(val => this.handleError(new HttpErrorResponse(val)))
			);
	}

	getAllShipment():Observable<Shipment[]>{
		return this.http.get<Shipment[]>(`${environment.baseUrl}/api/admin/AllShipments`)
			.pipe(
				catchError(val => this.handleError(val))
			);
	}

	isAuthenticated():boolean{
		 const token = localStorage.getItem('token');
		 if(token != null) return true;
		 return false;
	}
}
