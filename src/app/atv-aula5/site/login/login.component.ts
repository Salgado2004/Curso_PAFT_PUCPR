import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dataSource!: FormGroup;
  inputType: string = "password";
  showPass: boolean = false;
  visibility: string = "visibility";

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit():void {
    this.dataSource = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  get email() {
    return this.dataSource.get('email');
  }

  get password() {
    return this.dataSource.get('password');
  }

  submitLogin(event: any) {
    if (this.dataSource.valid) {
      this._snackBar.open("Login sucedido", "", {
        duration: 5000
      });
    } else {
      console.log("nao logou")
    }
  }

  togglePass() {
    this.showPass = !this.showPass
    if (this.showPass) {
      this.inputType = "text"
      this.visibility = "visibility_off"
    } else {
      this.inputType = "password"
      this.visibility = "visibility"
    }
  }

}
