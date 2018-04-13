import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Product } from '../../shared/models/product';
import { error } from 'protractor';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    public AllProduct: Product[];
    public isRequesting: boolean;
    constructor(private _commonService: CommonService) { }
    getAllProduct() {
        this.isRequesting = true;
        this._commonService.getAllProduct().subscribe(data => {
            this.AllProduct = data;
            console.log(data);
            this.isRequesting = false;
        },
            error => {
                console.log(error);
                this.isRequesting= false;
            }
        );
    }
    ngOnInit() {
        this.getAllProduct();
    }

}
