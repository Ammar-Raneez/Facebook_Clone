import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center ">
      <Image
        src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
        height={400}
        width={400}
        objectFit="contain"
      />

      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center
      cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
