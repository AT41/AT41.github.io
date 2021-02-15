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
