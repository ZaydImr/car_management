import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  email: string = "";
  errMessage: string = "";
  vldMessage: string = "";

  constructor(private auth: AngularFireAuth ) { }

  ngOnInit(): void {
  }

  onForget(){
    this.errMessage = "";
    
    this.auth.sendPasswordResetEmail(this.email)
      .then(()=>{
        this.vldMessage = "Check your email inbox .";
      })
      .catch(e=>{
        this.errMessage = e.message.replace('Firebase: ','');
      });
  }

}
