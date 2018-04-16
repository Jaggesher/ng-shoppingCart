import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { environment } from '../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {

  }

}
