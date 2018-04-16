import { Component, OnInit } from '@angular/core';
import { Shipment } from '../Models/shipment';
import { AdminService } from '../Services/admin.service';
import { error } from 'protractor';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  public AllShipment: Shipment[];
  public isRequesting: boolean;
  private getShipment() {
    this.isRequesting = true;
    this._adminService.getAllShipment().subscribe(
      data => {
        this.AllShipment = data;
        this.isRequesting = false;
      },
      error => {
        console.log(error);
      }
    );
  }
  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this.getShipment();
  }

}
