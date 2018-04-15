import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { Product } from '../../shared/models/product';
import { error } from 'protractor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public Product: Product;
  getProduct(id) {
    console.log(id);
    this._commonService.getProduct(id).subscribe(
      data => {
        this.Product = data;
        console.log(this.Product);
      },
      error => {
        console.log(error);
      }
    );

  }

  constructor(private route: ActivatedRoute, private _commonService: CommonService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

}
