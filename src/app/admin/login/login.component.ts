import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

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


			this.isRequesting = true;
			
			console.log(this.loginForm.value);

            this.loginForm.reset();
        }
	}
	
}
