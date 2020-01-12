import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { WindowService } from './window.service';
import * as firebase from 'firebase';

import { environment } from '../environments/environment';

import { QrCodeReader } from './qr-code-reader.service';
import { Subscription } from 'rxjs';



export class PhoneNumber {
  phn_number: string;

  get e164() {
    const num = this.phn_number
    return `+${num}`
  }

}

@Component({
  selector: 'app-root',
  providers: [WindowService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {

  ngxQrcode2: string;

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  ansofqr: any;

  subscription: Subscription;


  constructor(private win: WindowService, private qrReader: QrCodeReader) {
      firebase.initializeApp(environment.firebase);
  }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    console.log('phoneNumber ========== ', num);

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log('code not sent', error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


  onFileChange(event) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(decodedString => {
      		this.ansofqr = decodedString;
      });
  }


}


