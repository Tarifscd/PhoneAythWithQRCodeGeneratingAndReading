// ##########  Duplicate code of Phone Login ############
// =============================================================


//const firebaseConfig = {
          //apiKey: "AIzaSyANMpqrFA-kUI1u7xNg_I1YF9uZV9kdalE",
          //authDomain: "phoneauthfirebase-939d7.firebaseapp.com",
          //databaseURL: "https://phoneauthfirebase-939d7.firebaseio.com",
          //projectId: "phoneauthfirebase-939d7",
          //storageBucket: "phoneauthfirebase-939d7.appspot.com",
          //messagingSenderId: "753202768504",
          //appId: "1:753202768504:web:db0738421d7677e5d21b8d",
          //measurementId: "G-970D5JHJTW"
        //};
        //if (!firebase.apps.length) {
          //firebase.initializeApp(firebaseConfig);
        //}




// import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';

// @Component({
//   selector: 'app-phone-login',
//   templateUrl: './phone-login.component.html',
//   styleUrls: ['./phone-login.component.css']
// })
// export class PhoneLoginComponent implements OnInit {

//   public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
//   public sent: boolean;

//   constructor() {
//     const firebaseConfig = {
//       apiKey: "AIzaSyANMpqrFA-kUI1u7xNg_I1YF9uZV9kdalE",
//       authDomain: "phoneauthfirebase-939d7.firebaseapp.com",
//       databaseURL: "https://phoneauthfirebase-939d7.firebaseio.com",
//       projectId: "phoneauthfirebase-939d7",
//       storageBucket: "phoneauthfirebase-939d7.appspot.com",
//       messagingSenderId: "753202768504",
//       appId: "1:753202768504:web:db0738421d7677e5d21b8d",
//       measurementId: "G-970D5JHJTW"
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
//   }

//   ngOnInit() {
//     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
//   }

//   onSubmit(formData) {
//     const appVerifier = this.recaptchaVerifier;
//     const phoneNumber = '+' + formData.phone_number.toString();
//     console.log('phoneNumberString ==== ', phoneNumber);

//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         this.sent = true;
//         const verification = prompt('Enter verification code');
//         if (verification != null) {
//           console.log(verification);
//           confirmationResult.confirm(verification)
//             .then((good) => {
//               // all checks out
//             })
//             .catch((bad) => {
//               // code verification was bad.
//             });
//         } else {
//           console.log('No verification code entered');
//         }
//       })
//       .catch((err) => {
//         console.log('sms not sent', err);
//       });
//   };

// }



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-phone-login',
//   templateUrl: './phone-login.component.html',
//   styleUrls: ['./phone-login.component.css']
// })
// export class PhoneLoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
