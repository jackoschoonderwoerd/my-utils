// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyAvxp_E8LQRc3e7KOUTXJkdHxi4C1dWh4A",
  authDomain: "my-utils-91637.firebaseapp.com",
  projectId: "my-utils-91637",
  storageBucket: "my-utils-91637.appspot.com",
  messagingSenderId: "652466560350",
  appId: "1:652466560350:web:f2d08795875eaed21743cf"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
