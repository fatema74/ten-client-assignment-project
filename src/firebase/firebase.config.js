// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDg4SLuN0iYiVm_xvpCCVykHGDHMgkdoFg',
  authDomain: 'cocacola-store.firebaseapp.com',
  projectId: 'cocacola-store',
  storageBucket: 'cocacola-store.appspot.com',
  messagingSenderId: '410146985474',
  appId: '1:410146985474:web:33512164b2cd07ebedb91b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;