import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class AdminService extends BaseService {

  constructor(private http: HttpClient) { super();  }

  addNewCategory() {

  }
}
