import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { Credential } from '../Models/credential';
import { error } from 'protractor';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public isRequesting: boolean;
	public loginForm: FormGroup;
	public name: FormControl;
	public password: FormControl;
	public credential: Credential;

	private createForm() {
		this.loginForm = new FormGroup({
			name: this.name,
			password: this.password
		});
	}

	private createFormControls() {
		this.name = new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(100)
		]);
		this.password = new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(100)
		])
	}

	constructor(private _adminService: AdminService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}

	onSubmit() {
		if (this.loginForm.valid) {

			this.credential = new Credential();

			this.credential.UserName = this.name.value;
			this.credential.Password = this.password.value;

			this.isRequesting = true;

			this._adminService.loin(this.credential).subscribe(
				data => {
					console.log(data);
					this.isRequesting=false;
				},
				error => {
					console.log(error);
					this.isRequesting=false;
				}
			);
			console.log(this.credential);

			this.loginForm.reset();
		}
	}

}
