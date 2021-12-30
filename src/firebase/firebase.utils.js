import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIEYsN1G1PJa8ESW7Qr7Qr_pSQ2whPRVA",
  authDomain: "shop-now-8d88c.firebaseapp.com",
  projectId: "shop-now-8d88c",
  storageBucket: "shop-now-8d88c.appspot.com",
  messagingSenderId: "818252274037",
  appId: "1:818252274037:web:ebf5ddb2a371a8bf379b3c",
  measurementId: "G-HYWHHGMW9N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

//For getting the cities(or any other data) from the database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

const provider = new GoogleAuthProvider();
export { auth, provider };
