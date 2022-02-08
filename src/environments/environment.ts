// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAXxHlIkHXYfKJkUiUlPdpXd5pSjxAIfOM",
    authDomain: "mysite-b69a0.firebaseapp.com",
    databaseURL: "https://mysite-b69a0-default-rtdb.firebaseio.com",
    projectId: "mysite-b69a0",
    storageBucket: "mysite-b69a0.appspot.com",
    messagingSenderId: "535138359470",
    appId: "1:535138359470:web:48c88f22341badd447353f",
    measurementId: "G-VDH4BDDHQQ"
  },
  cloudrun: {
    host: "https://mysite-server-upas5adfra-uw.a.run.app",
    paths: {
      fetchIp: "/fetch-ip"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
