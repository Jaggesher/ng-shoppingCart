import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../../admin/Services/admin.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  constructor(public router: Router, public auth: AdminService) { }

}
