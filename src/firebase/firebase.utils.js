import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqkuSKkIw0hIXtBShqGzrV6jVLDvjFUAU",
    authDomain: "crwn-db-74db9.firebaseapp.com",
    projectId: "crwn-db-74db9",
    storageBucket: "crwn-db-74db9.appspot.com",
    messagingSenderId: "842400912635",
    appId: "1:842400912635:web:b5c933ce1e8d539ef88c5e"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
console.log('error creating user', error.message);
        }
    }


    return userRef;
}


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;