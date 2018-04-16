import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { AdminService } from '../admin/Services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _commonService: CommonService, public _adminService: AdminService) { }

  ngOnInit() {
  }

  logMeout(){
    this._adminService.clearToken();
  }

}
