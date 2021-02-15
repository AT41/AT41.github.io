// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBIS3dVUxDR7iNa_1WLSpltw73AOwRuX90",
    authDomain: "mysite-a9c75.firebaseapp.com",
    databaseURL: "https://mysite-a9c75-default-rtdb.firebaseio.com",
    projectId: "mysite-a9c75",
    storageBucket: "mysite-a9c75.appspot.com",
    messagingSenderId: "1024630662056",
    appId: "1:1024630662056:web:dd23e895d8817e3feeb39d",
    measurementId: "G-3NHP8GFPSH"
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
