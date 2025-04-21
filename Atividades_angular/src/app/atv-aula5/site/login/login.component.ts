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
  ano = new Date;

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit():void {
    this.dataSource = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(4), Validators.email]),
      nome: new FormControl("", [Validators.required, Validators.minLength(4)]),
      data_nasc: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  get email() {
    return this.dataSource.get('email');
  }

  get nome() {
    return this.dataSource.get('nome');
  }

  get data_nasc() {
    return this.dataSource.get('data_nasc');
  }

  get password() {
    return this.dataSource.get('password');
  }

  submitLogin(event: any) {
    if (this.ano.getFullYear() - this.data_nasc!.value.slice(0,4) < 10 ) { // Se o usuário tem menos de 10 anos
      this.data_nasc!.setErrors({'age': true});
    } else {
      this.data_nasc!.setErrors({'age': false});
      this.data_nasc?.updateValueAndValidity();
    }

    if (this.ano.getFullYear() < this.data_nasc!.value.slice(0,4) ) {
      this.data_nasc!.setErrors({'future': true});
    } else {
      this.data_nasc!.setErrors({'future': false});
      this.data_nasc?.updateValueAndValidity();
    }

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
