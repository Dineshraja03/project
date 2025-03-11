import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgwwHwjUlNSphh-fF2ndHu-HjBHNoZ4Vs",
  authDomain: "online-safety-platform.firebaseapp.com",
  projectId: "online-safety-platform",
  storageBucket: "online-safety-platform.firebasestorage.app",
  messagingSenderId: "89151041787",
  appId: "1:89151041787:web:428a23784a19fe7994805e",
  measurementId: "G-W6TYWNZBPF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
