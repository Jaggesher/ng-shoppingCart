import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators'

@Injectable()
export class CommonService extends BaseService {

	constructor(private http: HttpClient) { super(); }

	getAllCategory(): Observable<Category[]> {
		return this.http.get<Category[]>(`${environment.baseUrl}/api/admin/AllCategory`)
		.pipe(
			catchError(val => this.handleError(new HttpErrorResponse(val)))
		  );
	}
}
