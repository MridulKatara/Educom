import AuthFrom from "../components/AuthFrom";
import { signInAuthUserWithEmailAndPassword } from "../firebase/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const handleSubmit = async ({ email, password }) => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      window.location.href = "/";
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password" || "auth/invalid-credential":
          toast.error("Incorrect password for user");
          break;
        case "auth/user-not-found":
          toast.error("No user found");
          break;
        default:
          toast.error("Error signing in!!");
          console.log(err);
      }
    }
  };

  return <AuthFrom onSignUp={false} handleSubmit={handleSubmit} />;
};

export default Login;
