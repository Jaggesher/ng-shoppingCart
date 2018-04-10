import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

	constructor(private http: HttpClient) { }

	getAllCategory(): Observable<Category[]> {
		return this.http.get<Category[]>(`${environment.baseUrl}/api/admin/AllCategory`);
	}
}
