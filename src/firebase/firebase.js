import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCyQoUwnPiLr_v0SdfHRqGz7KTUf3Vgvo4",
  authDomain: "educom-97a61.firebaseapp.com",
  projectId: "educom-97a61",
  storageBucket: "educom-97a61.appspot.com",
  messagingSenderId: "789770653064",
  appId: "1:789770653064:web:ff6ff5c307ee4fb611be3d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};

export const getUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // // Update user profile
    // await updateProfile(userCredential.user, {
    //   displayName: userName,
    //   photoURL: "https://example.com/jane-q-user/profile.jpg",
    // });

    // console.log("User profile updated successfully");

    return userCredential;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Rethrow the error to handle it at the calling code.
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const updateBookings = async (user, bookedDestination) => {
  const destinationRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(destinationRef);
  const { bookings } = userSnapshot.data();
  // Set the "capital" field of the city 'DC'
  await updateDoc(destinationRef, {
    bookings: [...bookings, bookedDestination],
  });
  console.log("booking updated");
};
export const updateUserDocumentFromAuth = async (user, newDisplayName) => {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);
  await updateDoc(userRef, {
    displayName: newDisplayName,
  });
};

export const setCourse = async (course) => {
  const courseRef = doc(db, "courses", uuid() + Date.now());
  try {
    await setDoc(courseRef, course);
  } catch (err) {
    console.log(err);
  }
};

export const updateDocumentById = async (
  collectionName,
  documentId,
  newData
) => {
  const documentRef = doc(db, collectionName, documentId);

  try {
    await updateDoc(documentRef, newData);
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
