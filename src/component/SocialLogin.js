import React from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../authentication/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, ghUser, ghLoading, ghError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (gUser || ghUser) {
    navigate(from, { replace: true });
  }
  if (gError || ghError) {
    toast.error("Internal Something Error ");
    return;
  }
  return (
    <>
      <div className="divider">OR</div>
      <button
        className="btn btn-outline btn-secondary mb-2"
        onClick={() => signInWithGoogle()}
      >
        <FaGooglePlusG className="text-2xl mr-3" /> Google
      </button>
      <button className="btn btn-outline" onClick={() => signInWithGithub()}>
        <FaGithub className="text-2xl mr-3" /> GitHub
      </button>
    </>
  );
};

export default SocialLogin;
