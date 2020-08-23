import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZE29MHMw_pvO3b0WLWClh8dKypazzooM",
  authDomain: "taelyim.firebaseapp.com",
  databaseURL: "https://taelyim.firebaseio.com",
  projectId: "taelyim",
  storageBucket: "taelyim.appspot.com",
  messagingSenderId: "584820688177",
  appId: "1:584820688177:web:7bab351b553e2690ed5c10",
  measurementId: "G-MSCLTNPJ2M",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, userNameAndRole) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, photoURL, emailVerified, uid } = userAuth;
    const createdAt = Date.now();
    const userData =
      userNameAndRole.role === "Student"
        ? {
            id: uid,
            name: userNameAndRole.name,
            email,
            created_at: createdAt,
            profile_pic: photoURL,
            role: userNameAndRole.role,
            verified: emailVerified,
            enrolled_courses: [],
          }
        : {
            id: uid,
            name: userNameAndRole.name,
            email,
            created_at: createdAt,
            profile_pic: photoURL,
            role: userNameAndRole.role,
            verified: emailVerified,
            created_courses: [],
          };

    try {
      await userRef.set(userData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
