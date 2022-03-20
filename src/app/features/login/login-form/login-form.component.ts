import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  errMessage: String = "";

  constructor(private auth: AngularFireAuth, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onLogin(){
    this.errMessage = "";
    
    const {email,password} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email,password)
      .then(()=>{
        this.router.navigate(['']);
      })
      .catch(e=>{
        this.errMessage = e.message.replace('Firebase: ','');
        this.loginForm.setValue({...this.loginForm.value, password : ''});
      });
  }

}
