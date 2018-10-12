import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig  = {
  apiKey: "AIzaSyACb_PM6kiQYwuakV4wFIcJm15enGC0xYI",
  authDomain: "react-crud-9986f.firebaseapp.com",
  databaseURL: "https://react-crud-9986f.firebaseio.com",
  projectId: "react-crud-9986f",
  storageBucket: "react-crud-9986f.appspot.com",
  messagingSenderId: "606698520871"
};
const devConfig = {
    apiKey: "AIzaSyACb_PM6kiQYwuakV4wFIcJm15enGC0xYI",
  authDomain: "react-crud-9986f.firebaseapp.com",
  databaseURL: "https://react-crud-9986f.firebaseio.com",
  projectId: "react-crud-9986f",
  storageBucket: "react-crud-9986f.appspot.com",
  messagingSenderId: "606698520871"
  };
  
  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };