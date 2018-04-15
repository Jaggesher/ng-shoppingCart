import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Product } from '../../shared/models/product';
import { error } from 'protractor';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    public AllProduct: Product[];
    public isRequesting: boolean;
    public baseUrl;
    constructor(private _commonService: CommonService) { }
    getAllProduct() {
        this.isRequesting = true;
        this._commonService.getAllProduct().subscribe(data => {
            this.AllProduct = data;
            this.isRequesting = false;
        },
            error => {
                console.log(error);
                this.isRequesting= false;
            }
        );
    }
    ngOnInit() {
       
        this.baseUrl= environment.baseUrl;
        this.getAllProduct();
    }

}
