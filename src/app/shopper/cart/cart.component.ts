import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from 'protractor';
import { Product } from '../../shared/models/product';
import { Cart } from '../../shared/models/cart';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public baseUrl: string;
    public isRequesting: boolean;
    public cartForm: FormGroup;
    public name: FormControl;
    public address: FormControl;
    public phone: FormControl;
    public products: Product[];
    public total: number;

    private createForm() {
        this.cartForm = new FormGroup({
            name: this.name,
            address: this.address,
            phone: this.phone,
        });
    }

    private createFormControls() {
        this.name = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
        ]);
        this.phone = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
        ]);
        this.address = new FormControl('', [
            Validators.required,
            Validators.maxLength(1000)
        ]);
    }

    private getProducts() {
        this.isRequesting = true;
        this.total = 0;
        this._commonService.getAllLocalProductDetails().subscribe(
            data => {
                this.products = data;
                data.forEach(element => {
                    element.inStock = this._commonService.getLocalProductQuantity(element.id);
                    this.total += (element.inStock * element.price);
                });
                this.isRequesting = false;
            },
            error => {
                console.log(error);
                this.isRequesting = false;
            }
        );
    }

    constructor(private _commonService: CommonService) { }

    ngOnInit() {
        this.baseUrl = environment.baseUrl;
        this.createFormControls();
        this.createForm();
        this.getProducts();
    }

    onSubmit() {
        this.isRequesting = true;
        if (this.cartForm.valid) {
            var _cart = new Cart();
            _cart.Name = this.name.value;
            _cart.Address = this.address.value;
            _cart.Phone = this.phone.value;
            _cart.TotalCost = this.total;

            this._commonService.saveShipment(_cart).subscribe(
                data => {
                    this._commonService.clearLocalStorage();
                    this.isRequesting = false;
                    this.getProducts();
                }, error => {
                    console.log(error);
                    this.isRequesting = false;
                }
            );
        }


        console.log(this.cartForm.value);
    }

}
