import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';
import { NewCategory } from '../Models/new-category';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService extends BaseService {

	constructor(private http: HttpClient) { super(); }

	addNewCategory(_newCategory: NewCategory){

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		}

		return this.http.post(`${environment.baseUrl}/api/admin/AddCategory`, _newCategory, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}
}
