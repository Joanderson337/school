import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAVsjqoKwSW-3JgZj92k-MXPw5z1sqwAdU',
  authDomain: 'escola-697f1.firebaseapp.com',
  projectId: 'escola-697f1',
  storageBucket: 'escola-697f1.appspot.com',
  messagingSenderId: '448164106401',
  appId: '1:448164106401:web:b57a57c704c344a83aa0e0'
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

