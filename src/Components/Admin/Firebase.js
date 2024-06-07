import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBdMN0j9h5AqQbOChoQeF0R2EqGYzeXBco",
    authDomain: "authentication-cloudstry.firebaseapp.com",
    projectId: "authentication-cloudstry",
    storageBucket: "authentication-cloudstry.appspot.com",
    messagingSenderId: "329547241025",
    appId: "1:329547241025:web:b32d21cce66244830358c0",
    measurementId: "G-S64BP0XJV6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database };
