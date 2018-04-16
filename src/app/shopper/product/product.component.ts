import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { Product } from '../../shared/models/product';
import { error } from 'protractor';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product;
  public baseUrl;
  public quantity: number;
  public isRequesting: boolean;
  getProduct(id) {
    console.log(id);
    this.isRequesting = true;

    this._commonService.getProduct(id).subscribe(
      data => {
        this.product = data;
        console.log(this.product);
        this.isRequesting = false;
      },
      error => {
        this.isRequesting = false;
        console.log(error);
      }
    );

  }

  constructor(private route: ActivatedRoute, private _commonService: CommonService) { }

  ngOnInit() {
    this.quantity = 0;
    const id = this.route.snapshot.paramMap.get('id');
    this.baseUrl = environment.baseUrl;
    this.getProduct(id);
  }

  public increaseByOne() {
    if (this.quantity < this.product.inStock) this.quantity += 1;
  }

  public deduceByOne() {

    if (this.quantity > 0) this.quantity -= 1;
  }
}
