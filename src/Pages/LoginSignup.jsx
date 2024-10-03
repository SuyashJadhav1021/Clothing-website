import React, { useState } from "react";

function LoginSignup() {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:py-20 font-style">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-[90%] sm:max-w-96 mx-auto gap-3 mt-8 mb-8"
      >
        <div className="flex flex-col items-center gap-1 text-2xl md:text-3xl font-semibold mb-2">
          <p>{currentState}</p>
          <hr className="h-1 w-14 border-none bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
            required={true}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
          required={true}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-2 py-1 rounded-sm text-sm outline-none"
          required={true}
        />
        <div className="flex w-full text-sm justify-between">
          <p className="cursor-pointer text-blue-800">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer text-gray-800"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </p>
          ) : (
            <p
              className="cursor-pointer text-gray-800"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </p>
          )}
        </div>
        <button className="mt-2 bg-black px-2 py-2 text-white text-sm hover:bg-gray-800 active:bg-gray-700">
          {currentState === "Login" ? "Sign In" : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default LoginSignup;
