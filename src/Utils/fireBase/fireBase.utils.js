import { initializeApp } from 'firebase/app';
import { 
     getAuth,
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider
}    from 'firebase/auth';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCGmLacZHwU1HTT6UWvt74ksrQFpPqWFoo",
  authDomain: "hermes-jewellery-db.firebaseapp.com",
  projectId: "hermes-jewellery-db",
  storageBucket: "hermes-jewellery-db.appspot.com",
  messagingSenderId: "392280148952",
  appId: "1:392280148952:web:8dac43a20e007b91e680ad"
};

// Initialize Firebase 
const firebaseApp = initializeApp(firebaseConfig);

const provider  = new GoogleAuthProvider();

provider.setCustomParameters({
        prompt:'select_account',
      });
    export const auth = getAuth();
    export const signInWithGooglePopup=  () => signInWithPopup(auth, provider);

    const db =  getFirestore();
    export const createUserDocumentFromAuth = async (userAuth) => {
      const UserDocRefernce = doc(db , 'users',userAuth.uid );
      console.log(UserDocRefernce);
      const UserSnapShot  = await getDoc(UserDocRefernce);
      console.log(UserSnapShot);
      console.log(UserSnapShot.exists());

      if(!UserSnapShot.exists())
      {
        const { displayName, email } = userAuth;
        const CreatedAt = new Date();

      try {
          await setDoc(UserDocRefernce,{
            displayName,
            email,
            CreatedAt
          });
          }
      catch(error) {
      console.log('error createing the user', error.message)
                    }
      }
    return UserDocRefernce;


    };


         








