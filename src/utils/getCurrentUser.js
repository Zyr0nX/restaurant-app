import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export let getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    }
    return null;
  });
};
