import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAuNWzJDIhtkWAAvpsPbv508GiX6Ev7JDk',
  authDomain: 'image-upload-11e25.firebaseapp.com',
  projectId: 'image-upload-11e25',
  storageBucket: 'image-upload-11e25.appspot.com',
  messagingSenderId: '286374758576',
  appId: '1:286374758576:web:8cda5be12bdac0a1bb1375',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
