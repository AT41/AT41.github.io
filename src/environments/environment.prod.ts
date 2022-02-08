export const environment = {
  production: false,
  firebase: {
    // TODO ANTHONY This should be changed
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
