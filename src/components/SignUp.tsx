import Banner from "../assets/img-B-Login.png";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const onSetEmailChange = (email: string) => {
    setEmail(email);
  };
  const onSetPasswordChange = (password: string) => {
    setpassword(password);
  };
  return (
    <div>
      <div className="w-screen h-1/4 p-9 text-center flex items-center flex-col ">
        <h1 className="font-bold text-4xl p-2">Sign in</h1>
        <p>Welcome Abort</p>
      </div>
      <div className="w-screen h-1/5 flex items-center flex-row">
        <img className="w-1/2 h-screen" src={Banner} alt="banner-pic" />
        <div>
          {/* <form>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <input type="submit" value="Submit" />
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </form> */}
          <label className="text-gray-500">Email</label>
          <input
            className=" border-2 mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
            required
            placeholder="Enter your email"
            type="email"
            onChange={(e) => {
              void onSetEmailChange(e.target.value);
            }}
          />
          <label className="text-gray-500">Password</label>
          <input
            className=" border-2 mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
            required
            placeholder="Enter your password"
            type="password"
            onChange={(e) => {
              void onSetPasswordChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
